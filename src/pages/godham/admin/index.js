import { useEffect, useState } from 'react';
import GodhamHead from '@/components/Godham/GodhamHead';
import {
  loginAdmin,
  fetchGallery,
  fetchQr,
  uploadGodhamImage,
  deleteGodhamImage,
} from '@/components/Godham/lib/api';

const SESSION_KEY = 'godham_admin_pw';

function LoginForm({ onSuccess }) {
  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      await loginAdmin(value);
      sessionStorage.setItem(SESSION_KEY, value);
      onSuccess(value);
    } catch (err) {
      setError(err.message || 'Incorrect password');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-login">
      <h1>Godham Admin</h1>
      <p>Enter the admin password to manage gallery photos and the donation QR code.</p>
      {error && <div className="admin-error">{error}</div>}
      <form onSubmit={submit}>
        <input
          type="password"
          placeholder="Admin password"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          autoFocus
          required
        />
        <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={loading}>
          {loading ? 'Checking…' : 'Log In'}
        </button>
      </form>
    </div>
  );
}

function GalleryPanel({ password }) {
  const [images, setImages] = useState([]);
  const [status, setStatus] = useState(null);
  const [caption, setCaption] = useState('');
  const [busy, setBusy] = useState(false);

  const load = () => fetchGallery().then(setImages);

  useEffect(() => { load(); }, []);

  const onFiles = async (e) => {
    const files = Array.from(e.target.files || []);
    e.target.value = '';
    if (!files.length) return;
    setBusy(true);
    setStatus(null);
    try {
      for (const file of files) {
        // caption only applied when uploading a single photo at a time
        await uploadGodhamImage({ file, type: 'gallery', caption: files.length === 1 ? caption : '', password });
      }
      setCaption('');
      await load();
      setStatus({ ok: true, msg: `Uploaded ${files.length} photo${files.length > 1 ? 's' : ''}.` });
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setBusy(false);
    }
  };

  const onDelete = async (publicId) => {
    if (!confirm('Remove this photo from the gallery?')) return;
    try {
      await deleteGodhamImage({ publicId, password });
      await load();
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    }
  };

  return (
    <div className="admin-panel">
      <h2>Gallery Photos</h2>
      <p className="hint">Upload photos to show on the public Gallery page and homepage. You can select multiple files at once.</p>
      <input
        className="admin-caption-input"
        placeholder="Caption (only used when uploading a single photo)"
        value={caption}
        onChange={(e) => setCaption(e.target.value)}
      />
      <div className="admin-dropzone">
        <input type="file" accept="image/*" multiple onChange={onFiles} disabled={busy} />
        <div style={{ marginTop: 8 }}>{busy ? 'Uploading…' : 'Choose photo(s) to upload (max 8MB each)'}</div>
      </div>
      {status && <div className={`admin-status ${status.ok ? 'ok' : 'err'}`}>{status.msg}</div>}
      <div className="admin-grid">
        {images.map((img) => (
          <div className="admin-thumb" key={img.publicId}>
            <img src={img.url} alt={img.caption || 'Gallery photo'} />
            <button className="thumb-del" onClick={() => onDelete(img.publicId)} aria-label="Delete">✕</button>
          </div>
        ))}
      </div>
      {images.length === 0 && <p className="hint" style={{ marginTop: 16 }}>No photos uploaded yet — the public site is showing sample placeholder photos.</p>}
    </div>
  );
}

function QrPanel({ password }) {
  const [qr, setQr] = useState(null);
  const [status, setStatus] = useState(null);
  const [busy, setBusy] = useState(false);

  const load = () => fetchQr().then(setQr);

  useEffect(() => { load(); }, []);

  const onFile = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = '';
    if (!file) return;
    setBusy(true);
    setStatus(null);
    try {
      await uploadGodhamImage({ file, type: 'qr', password });
      await load();
      setStatus({ ok: true, msg: 'Donation QR code updated.' });
    } catch (err) {
      setStatus({ ok: false, msg: err.message });
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="admin-panel">
      <h2>Donation QR Code</h2>
      <p className="hint">Uploading a new QR code replaces the one shown in the donation popup on the public site.</p>
      <div className="admin-qr-current">
        {qr ? <img src={qr.url} alt="Current donation QR" /> : <span className="hint">No QR code uploaded yet.</span>}
      </div>
      <div className="admin-dropzone">
        <input type="file" accept="image/*" onChange={onFile} disabled={busy} />
        <div style={{ marginTop: 8 }}>{busy ? 'Uploading…' : 'Choose a QR code image to upload'}</div>
      </div>
      {status && <div className={`admin-status ${status.ok ? 'ok' : 'err'}`}>{status.msg}</div>}
    </div>
  );
}

export default function GodhamAdminPage() {
  const [password, setPassword] = useState(null); // null = unknown/checking, '' handled as not authed
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(SESSION_KEY);
    if (!stored) {
      setChecked(true);
      return;
    }
    loginAdmin(stored)
      .then(() => setPassword(stored))
      .catch(() => sessionStorage.removeItem(SESSION_KEY))
      .finally(() => setChecked(true));
  }, []);

  const logout = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setPassword(null);
  };

  return (
    <>
      <GodhamHead title="Admin — Godham Trust" description="Godham Trust content admin." />
      <div className="godham-site">
        <div className="admin-shell">
          <div className="wrap">
            {!checked ? null : !password ? (
              <LoginForm onSuccess={setPassword} />
            ) : (
              <>
                <div className="admin-header">
                  <h1>Godham Trust — Admin</h1>
                  <button className="admin-logout" onClick={logout}>Log Out</button>
                </div>
                <GalleryPanel password={password} />
                <QrPanel password={password} />
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
