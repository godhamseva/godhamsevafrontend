import cloudinary, { GODHAM_GALLERY_FOLDER, GODHAM_VRIDHAASHRAM_FOLDER } from '@/lib/godham/cloudinary';

const FOLDERS_BY_CATEGORY = {
  gallery: GODHAM_GALLERY_FOLDER,
  vridhaashram: GODHAM_VRIDHAASHRAM_FOLDER,
};

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const category = typeof req.query.category === 'string' ? req.query.category : 'gallery';
  const folder = FOLDERS_BY_CATEGORY[category];
  if (!folder) {
    return res.status(400).json({ error: 'Invalid category' });
  }

  try {
    // Uses the Admin "list resources" endpoint (live resource metadata) rather
    // than the Search API, whose index lags a few seconds behind new uploads —
    // that lag made just-uploaded photos briefly invisible.
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `${folder}/`,
      max_results: 200,
      context: true,
    });

    const images = (result.resources || [])
      .map((r) => ({
        publicId: r.public_id,
        url: r.secure_url,
        width: r.width,
        height: r.height,
        caption: r.context?.custom?.caption || r.context?.caption || '',
        createdAt: r.created_at,
      }))
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({ images });
  } catch (err) {
    console.error('godham gallery list error', err);
    return res.status(200).json({ images: [] });
  }
}
