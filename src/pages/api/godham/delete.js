import cloudinary, { checkAdminPassword } from '@/lib/godham/cloudinary';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { password, publicId } = req.body || {};

  if (!checkAdminPassword(password)) {
    return res.status(401).json({ error: 'Incorrect admin password' });
  }

  if (!publicId || !publicId.startsWith('godham/')) {
    return res.status(400).json({ error: 'Invalid public id' });
  }

  try {
    await cloudinary.uploader.destroy(publicId);
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('godham delete error', err);
    return res.status(500).json({ error: 'Delete failed' });
  }
}
