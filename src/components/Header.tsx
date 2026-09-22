import React from 'react';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
  onToggleMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate, onToggleMenu }) => {
  const getSubTitle = () => {
    switch (currentPath) {
      case 'the-corporates':
        return '02 — The Corporates';
      case 'umang':
        return '03 — Umang Fest';
      case 'other-designs':
        return '04 — Other Designs';
      case 'about':
        return '05 — About Me';

      default:
        return '01 — Selected Work';
    }
  };

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#faf9f5]/90 backdrop-blur-xl border-b border-[#DCDCD6]/50 pt-safe transition-all duration-300">
      <div className="h-16 px-4 md:px-8 flex items-center justify-between gap-2 max-w-7xl mx-auto">
        {/* Logo & Info */}
        <div className="flex items-center gap-3 min-w-0">
          {/* YS Monogram SVG Logo */}
          <div className="w-8 h-8 rounded bg-[#000000] text-[#cef062] flex items-center justify-center font-bold font-space text-xs shrink-0 tracking-tighter">
            YS*
          </div>
          <div className="flex flex-col min-w-0">
            <span className="font-inter text-[11px] uppercase tracking-widest text-[#000000] truncate font-bold">
              Yuvraj Singh
            </span>
            <span className="font-inter text-[11px] text-[#6A6A6A] truncate">
              {getSubTitle()}
            </span>
          </div>
        </div>

        {/* Header Action Controls */}
        <div className="flex items-center gap-2 shrink-0">
          {currentPath !== 'work-home' && (
            <button
              onClick={() => onNavigate('work-home')}
              className="h-9 px-3 flex items-center justify-center gap-1.5 rounded bg-[#eeeeea] hover:bg-[#e8e8e4] active:scale-95 transition-all text-[#000000] font-inter text-[11px] uppercase tracking-wider font-semibold cursor-pointer"
            >
              <span className="material-symbols-outlined text-sm">west</span>
              <span className="hidden sm:inline">Back</span>
            </button>
          )}

          <button
            onClick={onToggleMenu}
            className="h-9 px-3 flex items-center justify-center gap-1.5 rounded bg-[#eeeeea] hover:bg-[#cef062] active:scale-95 transition-all text-[#000000] font-inter text-[11px] uppercase tracking-wider font-medium cursor-pointer"
          >
            <span>Menu</span>
            <span className="font-space text-base font-bold text-[#516600] leading-none">*</span>
          </button>
        </div>
      </div>
    </header>
  );
};
