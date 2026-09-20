import { IncomingForm } from 'formidable';
import cloudinary, { checkAdminPassword, GODHAM_GALLERY_FOLDER, GODHAM_QR_FOLDER } from '@/lib/godham/cloudinary';

export const config = {
  api: {
    bodyParser: false,
  },
};

const MAX_FILE_SIZE = 8 * 1024 * 1024; // 8MB

function firstValue(value) {
  return Array.isArray(value) ? value[0] : value;
}

function parseForm(req) {
  const form = new IncomingForm({
    maxFileSize: MAX_FILE_SIZE,
    keepExtensions: true,
  });
  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) reject(err);
      else resolve({ fields, files });
    });
  });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let fields;
  let files;
  try {
    ({ fields, files } = await parseForm(req));
  } catch (err) {
    const tooLarge = err?.code === 1009 || /maxFileSize/i.test(err?.message || '');
    return res.status(tooLarge ? 413 : 400).json({ error: tooLarge ? 'File too large (max 8MB)' : 'Invalid upload' });
  }

  const password = firstValue(fields.password);
  const type = firstValue(fields.type);
  const caption = firstValue(fields.caption) || '';
  const file = firstValue(files.file);

  if (!checkAdminPassword(password)) {
    return res.status(401).json({ error: 'Incorrect admin password' });
  }

  if (!file) {
    return res.status(400).json({ error: 'No file received' });
  }

  if (!['gallery', 'qr'].includes(type)) {
    return res.status(400).json({ error: 'Invalid upload type' });
  }

  const mimetype = file.mimetype || file.type || '';
  if (!mimetype.startsWith('image/')) {
    return res.status(400).json({ error: 'Only image files are allowed' });
  }

  const folder = type === 'gallery' ? GODHAM_GALLERY_FOLDER : GODHAM_QR_FOLDER;

  try {
    const uploadResult = await cloudinary.uploader.upload(file.filepath, {
      folder,
      tags: [type === 'gallery' ? 'godham_gallery' : 'godham_qr'],
      context: caption ? { caption } : undefined,
    });

    if (type === 'qr') {
      // Keep only the newest QR code so the site always shows the latest one.
      const existing = await cloudinary.api.resources({
        type: 'upload',
        prefix: `${GODHAM_QR_FOLDER}/`,
        max_results: 200,
      });
      const staleIds = (existing.resources || [])
        .map((r) => r.public_id)
        .filter((id) => id !== uploadResult.public_id);
      if (staleIds.length) {
        await cloudinary.api.delete_resources(staleIds);
      }
    }

    return res.status(200).json({
      publicId: uploadResult.public_id,
      url: uploadResult.secure_url,
      width: uploadResult.width,
      height: uploadResult.height,
    });
  } catch (err) {
    console.error('godham upload error', err);
    return res.status(500).json({ error: 'Upload to Cloudinary failed' });
  }
}
