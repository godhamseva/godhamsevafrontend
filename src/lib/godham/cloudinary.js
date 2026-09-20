import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

export const GODHAM_GALLERY_FOLDER = 'godham/gallery';
export const GODHAM_QR_FOLDER = 'godham/qr';

export function checkAdminPassword(password) {
  const expected = process.env.GODHAM_ADMIN_PASSWORD;
  return Boolean(expected) && password === expected;
}

export default cloudinary;
