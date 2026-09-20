import Header from './sections/Header';
import Footer from './sections/Footer';
import FloatingButtons from './sections/FloatingButtons';

export default function GodhamLayout({ children, showFloating = true }) {
  return (
    <div className="godham-site">
      <Header />
      {children}
      <Footer />
      {showFloating && <FloatingButtons />}
    </div>
  );
}
