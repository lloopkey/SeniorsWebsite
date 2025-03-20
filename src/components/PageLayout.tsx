import Header from './Header';
import Footer from './Footer';
import AccessibilityNavbar from './AccessibilityNavbar';

export default function PageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen">
      <AccessibilityNavbar />
      <div className="container-custom mx-auto my-4">
        <Header />
        <main className="p-4 md:p-8">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}
