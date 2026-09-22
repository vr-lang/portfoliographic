import React, { useState } from 'react';
import { CORPORATES_ITEMS } from '../data/galleryData';
import type { GalleryItem } from '../data/galleryData';


interface CorporatesGalleryProps {
  onNavigate: (path: string) => void;
  onOpenLightbox: (items: GalleryItem[], index: number) => void;
}

export const CorporatesGallery: React.FC<CorporatesGalleryProps> = ({
  onNavigate,
  onOpenLightbox,
}) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const filteredItems =
    activeFilter === 'all'
      ? CORPORATES_ITEMS
      : CORPORATES_ITEMS.filter((item) => item.category === activeFilter);

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'posters', label: 'Posters' },
    { id: 'branding', label: 'Branding' },
    { id: 'editorial', label: 'Editorial' },
    { id: 'social', label: 'Social' },
    { id: 'events', label: 'Events' },
  ];

  return (
    <div className="flex flex-col w-full pt-16 pb-28 bg-[#faf9f5]">
      {/* Back Navigation Link */}
      <div className="px-4 md:px-8 pt-3 pb-1 max-w-7xl mx-auto w-full">
        <button
          onClick={() => onNavigate('work-home')}
          className="inline-flex items-center gap-1.5 py-1 px-3 rounded bg-[#f4f4f0] text-[#000000] hover:bg-[#e8e8e4] transition-colors font-inter text-xs uppercase tracking-wider font-semibold cursor-pointer"
        >
          <span className="material-symbols-outlined text-sm">arrow_back</span>
          <span>Back to Work Index</span>
        </button>
      </div>

      {/* Editorial Section Header */}
      <section className="px-4 md:px-8 pt-3 pb-4 flex flex-col gap-1 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between text-[#6A6A6A]">
          <span className="font-inter text-xs uppercase tracking-widest text-[#516600] font-bold">
            Archive Vol. 01
          </span>
          <span className="font-inter text-xs uppercase tracking-widest">2023–2024</span>
        </div>
        <h1 className="font-space text-3xl md:text-5xl uppercase tracking-tight text-[#000000] font-bold leading-none mt-1">
          02 — The Corporates
        </h1>
        <p className="font-inter text-xs md:text-sm uppercase tracking-wider text-[#6A6A6A] mt-1 font-medium">
          Commerce Society Visual Design • Satyawati College
        </p>
      </section>

      {/* Sticky Category Filter Pills */}
      <section className="sticky top-16 z-30 bg-[#faf9f5]/95 backdrop-blur-md px-4 md:px-8 py-2.5 border-b border-[#DCDCD6]/40">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-0.5 max-w-7xl mx-auto w-full">
          {filters.map((f) => {
            const isActive = activeFilter === f.id;
            return (
              <button
                key={f.id}
                onClick={() => setActiveFilter(f.id)}
                className={`shrink-0 px-4 py-1.5 rounded font-inter text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  isActive
                    ? 'bg-[#cef062] text-[#161e00] font-bold shadow-xs'
                    : 'bg-[#e8e8e4] text-[#1a1c1a] hover:bg-[#e2e3df]'
                }`}
              >
                {f.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="px-4 md:px-8 pt-6 pb-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredItems.map((item, idx) => {
            // Map aspect ratio string to CSS aspect ratio
            const getAspectClass = (ratio: string) => {
              switch (ratio) {
                case '16/9':
                  return 'aspect-[16/9]';
                case '3/4':
                  return 'aspect-[3/4]';
                case '4/5':
                  return 'aspect-[4/5]';
                case '1/1':
                default:
                  return 'aspect-square';
              }
            };

            return (
              <article
                key={item.id}
                onClick={() => onOpenLightbox(filteredItems, idx)}
                className="group relative w-full rounded overflow-hidden shadow-xs bg-[#eeeeea] cursor-pointer hover:shadow-md transition-all"
              >
                <div className={`w-full ${getAspectClass(item.aspectRatio)} relative overflow-hidden`}>
                  <img
                    src={item.src}
                    alt={item.alt}
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-[#000000]/0 group-hover:bg-[#000000]/30 transition-colors flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100">
                    <span className="font-inter text-[10px] uppercase tracking-widest text-[#cef062] font-bold">
                      {item.tag}
                    </span>
                    <span className="font-space text-sm font-bold text-[#ffffff] mt-0.5">
                      {item.title}
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Next Collection Banner */}
      <section className="px-4 md:px-8 mt-4 max-w-7xl mx-auto w-full">
        <button
          onClick={() => onNavigate('umang')}
          className="group text-left block w-full p-6 rounded bg-[#FFFFFF] border border-[#DCDCD6] shadow-xs hover:border-[#516600] active:bg-[#cef062]/10 transition-all cursor-pointer"
        >
          <div className="flex items-center justify-between font-inter text-xs uppercase tracking-widest text-[#6A6A6A]">
            <span>Curated Archive 02 / 04</span>
            <span className="flex items-center gap-1 text-[#516600] font-bold">
              Next Index <span className="material-symbols-outlined text-sm">east</span>
            </span>

          </div>
          <h2 className="font-space text-2xl md:text-4xl uppercase tracking-tight text-[#000000] mt-3 leading-tight group-hover:text-[#516600] transition-colors font-bold">
            Next Collection →<br />
            Umang Cultural Fest
          </h2>
          <p className="font-geist text-xs md:text-sm text-[#6A6A6A] mt-2 leading-relaxed">
            Visual design for Satyawati College's annual cultural festival — electric posters, artist reveals, and ambient signage.
          </p>
          <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded bg-[#000000] text-[#ffffff] font-inter text-xs uppercase tracking-wider group-hover:bg-[#516600] transition-colors">
            <span>Proceed to 03 Umang</span>
            <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </div>
        </button>
      </section>

      {/* Footer */}
      <footer className="mt-12 px-4 md:px-8 pb-4 flex flex-col gap-2 text-[#6A6A6A] max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/40 pt-6">
        <div className="flex items-center justify-between font-inter text-xs uppercase tracking-widest text-[#444748]">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#516600] inline-block animate-pulse" />
            Available for Freelance Projects

          </span>
          <span>YS* Edition</span>
        </div>
        <div className="flex items-center justify-between font-inter text-xs">
          <span className="text-[#000000] font-medium">New Delhi, India</span>
          <span className="font-mono">28°36'N / 77°13'E</span>
        </div>
      </footer>
    </div>
  );
};
