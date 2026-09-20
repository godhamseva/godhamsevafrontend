export async function fetchGallery() {
  const res = await fetch('/api/godham/gallery', { cache: 'no-store' });
  const data = await res.json();
  return data.images || [];
}

export async function fetchQr() {
  const res = await fetch('/api/godham/qr', { cache: 'no-store' });
  const data = await res.json();
  return data.qr || null;
}

export async function loginAdmin(password) {
  const res = await fetch('/api/godham/auth', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ password }),
  });
  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || 'Login failed');
  }
  return true;
}

export async function uploadGodhamImage({ file, type, caption, password }) {
  const form = new FormData();
  form.append('file', file);
  form.append('type', type);
  form.append('password', password);
  if (caption) form.append('caption', caption);

  const res = await fetch('/api/godham/upload', { method: 'POST', body: form });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Upload failed');
  return data;
}

export async function deleteGodhamImage({ publicId, password }) {
  const res = await fetch('/api/godham/delete', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ publicId, password }),
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) throw new Error(data.error || 'Delete failed');
  return true;
}
