import React, { useEffect } from 'react';
import type { GalleryItem } from '../data/galleryData';


interface LightboxModalProps {
  isOpen: boolean;
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const LightboxModal: React.FC<LightboxModalProps> = ({
  isOpen,
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex] || items[0];
  const formattedCounter = `${String(currentIndex + 1).padStart(2, '0')} / ${String(
    items.length
  ).padStart(2, '0')}`;

  return (
    <div className="fixed inset-0 z-50 bg-[#faf9f5]/98 backdrop-blur-xl flex flex-col justify-between p-4 md:p-8 animate-in fade-in duration-200">
      {/* Lightbox Top Bar */}
      <div className="flex items-center justify-between pt-safe max-w-7xl w-full mx-auto">
        <div className="flex flex-col min-w-0 pr-4">
          <span className="font-inter text-xs uppercase tracking-widest text-[#516600] font-bold truncate">
            {currentItem.tag}
          </span>
          <div className="flex items-center gap-2 mt-0.5">
            <span className="font-space text-sm font-semibold text-[#000000] truncate">
              {currentItem.title}
            </span>
            <span className="font-inter text-xs text-[#6A6A6A]">
              ({currentItem.year || '2024'})
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <span className="font-mono text-xs font-semibold text-[#6A6A6A]">
            {formattedCounter}
          </span>
          <button
            onClick={onClose}
            className="w-10 h-10 flex items-center justify-center rounded bg-[#eeeeea] hover:bg-[#e8e8e4] text-[#000000] active:scale-95 transition-all cursor-pointer"
            aria-label="Close lightbox"
          >
            <span className="material-symbols-outlined text-xl">close</span>
          </button>
        </div>
      </div>

      {/* Lightbox Main Image Preview */}
      <div className="flex-1 flex flex-col items-center justify-center my-auto py-4 px-2 max-w-5xl mx-auto w-full">
        <div className="relative max-h-[70vh] flex items-center justify-center">
          <img
            src={currentItem.src}
            alt={currentItem.alt}
            className="max-h-[68vh] w-auto max-w-full object-contain rounded shadow-lg border border-[#DCDCD6]/40 transition-all duration-300"
          />
        </div>
        {currentItem.description && (
          <p className="font-geist text-xs md:text-sm text-[#444748] max-w-lg text-center mt-3 leading-relaxed">
            {currentItem.description}
          </p>
        )}
      </div>

      {/* Lightbox Footer Controls */}
      <div className="flex items-center justify-between pb-safe pt-2 max-w-7xl w-full mx-auto border-t border-[#DCDCD6]/40">
        <button
          onClick={onPrev}
          className="h-10 px-4 flex items-center gap-1.5 rounded bg-[#eeeeea] hover:bg-[#cef062] text-[#000000] active:scale-95 transition-all font-inter text-xs uppercase tracking-wider font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-base">chevron_left</span>
          <span>Previous</span>
        </button>

        <span className="font-inter text-[11px] uppercase tracking-widest text-[#6A6A6A] hidden sm:inline">
          Use Arrow Keys or Buttons to Navigate
        </span>

        <button
          onClick={onNext}
          className="h-10 px-4 flex items-center gap-1.5 rounded bg-[#eeeeea] hover:bg-[#cef062] text-[#000000] active:scale-95 transition-all font-inter text-xs uppercase tracking-wider font-semibold cursor-pointer"
        >
          <span>Next</span>
          <span className="material-symbols-outlined text-base">chevron_right</span>
        </button>
      </div>
    </div>
  );
};
