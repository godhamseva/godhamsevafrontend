import cloudinary, { GODHAM_QR_FOLDER } from '@/lib/godham/cloudinary';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Admin "list resources" endpoint — see gallery.js for why not Search API.
    const result = await cloudinary.api.resources({
      type: 'upload',
      prefix: `${GODHAM_QR_FOLDER}/`,
      max_results: 200,
    });

    const sorted = (result.resources || []).sort(
      (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );
    const latest = sorted[0];

    res.setHeader('Cache-Control', 'no-store');
    return res.status(200).json({
      qr: latest
        ? { publicId: latest.public_id, url: latest.secure_url, createdAt: latest.created_at }
        : null,
    });
  } catch (err) {
    console.error('godham qr fetch error', err);
    return res.status(200).json({ qr: null });
  }
}
