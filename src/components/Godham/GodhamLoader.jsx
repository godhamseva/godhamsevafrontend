'use client';

// Standalone loading screen for Godham routes — deliberately uses hardcoded
// hex colors instead of the --saffron/--cream CSS variables, since this can
// render before the .godham-site wrapper (where those variables are scoped)
// exists in the DOM.
const GodhamLoader = () => {
  return (
    <div
      className="fixed inset-0 z-50 flex flex-col justify-center items-center"
      style={{ background: '#faf5e8' }}
    >
      <div className="mb-8 flex flex-col items-center gap-3">
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full"
            style={{
              border: '4px solid rgba(226,130,47,0.2)',
              borderTopColor: '#e2822f',
              animation: 'godham-loader-spin 0.9s linear infinite',
            }}
          />
          <div
            className="w-6 h-6 rounded-full"
            style={{ background: '#e2822f', animation: 'godham-loader-pulse 1.4s ease-in-out infinite' }}
          />
        </div>
        <span
          className="text-xl font-extrabold uppercase"
          style={{ letterSpacing: '0.25em', color: '#3a2410', fontFamily: 'Georgia, "Times New Roman", serif' }}
        >
          Godham Trust
        </span>
      </div>

      <div className="w-40 h-0.5 rounded-full overflow-hidden" style={{ background: 'rgba(58,36,16,0.15)' }}>
        <div
          className="h-full rounded-full"
          style={{ background: '#e2822f', animation: 'godham-loader-bar 1.4s ease-in-out infinite' }}
        />
      </div>

      <style jsx>{`
        @keyframes godham-loader-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes godham-loader-pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.85); }
        }
        @keyframes godham-loader-bar {
          0%   { width: 0%;   margin-left: 0%; }
          50%  { width: 70%;  margin-left: 15%; }
          100% { width: 0%;   margin-left: 100%; }
        }
      `}</style>
    </div>
  );
};

export default GodhamLoader;
