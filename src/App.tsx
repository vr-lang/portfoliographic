import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { EditorialMenu } from './components/EditorialMenu';
import { BottomNav } from './components/BottomNav';
import { LightboxModal } from './components/LightboxModal';
import { WorkHome } from './components/WorkHome';
import { CorporatesGallery } from './components/CorporatesGallery';
import { UmangGallery } from './components/UmangGallery';
import { OtherDesignsGallery } from './components/OtherDesignsGallery';
import { AboutStudio } from './components/AboutStudio';
import { CustomCursor } from './components/CustomCursor';
import type { GalleryItem } from './data/galleryData';


export function App() {
  // Navigation State
  const [currentPath, setCurrentPath] = useState<string>('other-designs');
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState<boolean>(false);
  const [lightboxItems, setLightboxItems] = useState<GalleryItem[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState<number>(0);

  // Hash route listener
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (['work-home', 'the-corporates', 'umang', 'other-designs', 'about'].includes(hash)) {
        setCurrentPath(hash);
      }
    };

    if (window.location.hash) {
      handleHashChange();
    }

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (path: string) => {
    setCurrentPath(path);
    window.location.hash = path;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenLightbox = (items: GalleryItem[], index: number) => {
    setLightboxItems(items);
    setLightboxIndex(index);
    setLightboxOpen(true);
  };

  const handlePrevLightbox = () => {
    setLightboxIndex((prev) => (prev - 1 + lightboxItems.length) % lightboxItems.length);
  };

  const handleNextLightbox = () => {
    setLightboxIndex((prev) => (prev + 1) % lightboxItems.length);
  };

  return (
    <div className="min-h-full flex flex-col flex-1 relative bg-[#faf9f5]">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Top Header */}
      <Header
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onToggleMenu={() => setIsMenuOpen(!isMenuOpen)}
      />

      {/* Fullscreen Overlay Menu */}
      <EditorialMenu
        isOpen={isMenuOpen}
        currentPath={currentPath}
        onNavigate={handleNavigate}
        onClose={() => setIsMenuOpen(false)}
      />

      {/* Main View Router */}
      <main className="flex-1 flex flex-col min-h-full">
        {currentPath === 'work-home' && (
          <WorkHome onNavigate={handleNavigate} />
        )}

        {currentPath === 'the-corporates' && (
          <CorporatesGallery onNavigate={handleNavigate} onOpenLightbox={handleOpenLightbox} />
        )}
        {currentPath === 'umang' && (
          <UmangGallery onNavigate={handleNavigate} onOpenLightbox={handleOpenLightbox} />
        )}
        {currentPath === 'other-designs' && (
          <OtherDesignsGallery onNavigate={handleNavigate} onOpenLightbox={handleOpenLightbox} />
        )}
        {currentPath === 'about' && (
          <AboutStudio onNavigate={handleNavigate} />
        )}
      </main>

      {/* Bottom Fixed Navigation Bar */}
      <BottomNav currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Fullscreen Lightbox Modal */}
      <LightboxModal
        isOpen={lightboxOpen}
        items={lightboxItems}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrevLightbox}
        onNext={handleNextLightbox}
      />
    </div>
  );
}

export default App;
