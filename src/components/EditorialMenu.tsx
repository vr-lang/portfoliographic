import React from 'react';

interface EditorialMenuProps {
  isOpen: boolean;
  currentPath: string;
  onNavigate: (path: string) => void;
  onClose: () => void;
}

export const EditorialMenu: React.FC<EditorialMenuProps> = ({
  isOpen,
  currentPath,
  onNavigate,
  onClose,
}) => {
  if (!isOpen) return null;

  const menuItems = [
    { path: 'work-home', label: '01 Work', desc: 'Featured Projects & Visual Index' },
    { path: 'the-corporates', label: '02 The Corporates', desc: 'Commerce Society Archives 2023–2024' },
    { path: 'umang', label: '03 Umang Fest', desc: 'Cultural Fest Identity & Stage Graphics' },
    { path: 'other-designs', label: '04 Other Designs', desc: 'Experimental Typography & Swiss Grids' },
    { path: 'about', label: '05 About Me', desc: 'Bio, Graphic Design Work & Contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-[#faf9f5]/98 backdrop-blur-2xl px-6 md:px-12 pt-safe pb-safe animate-in fade-in duration-200">
      {/* Menu Header */}
      <div className="h-16 flex items-center justify-between border-b border-[#DCDCD6] max-w-7xl w-full mx-auto">
        <div className="flex items-center gap-2">
          <span className="font-space text-lg font-bold tracking-tight text-[#000000]">YS*</span>
          <span className="font-inter text-xs text-[#6A6A6A] uppercase tracking-widest">
            Portfolio Index
          </span>
        </div>
        <button
          onClick={onClose}
          className="w-9 h-9 flex items-center justify-center rounded bg-[#eeeeea] text-[#000000] hover:bg-[#e8e8e4] active:scale-95 transition-all cursor-pointer"
        >
          <span className="material-symbols-outlined text-lg">close</span>
        </button>
      </div>

      {/* Menu Content Links */}
      <div className="flex-1 flex flex-col justify-center gap-6 my-auto max-w-7xl w-full mx-auto py-8">
        <span className="font-inter text-xs uppercase tracking-widest text-[#6A6A6A] font-semibold">
          Index / Navigation
        </span>
        <nav className="flex flex-col gap-3">
          {menuItems.map((item) => {
            const isActive = currentPath === item.path;
            return (
              <button
                key={item.path}
                onClick={() => {
                  onNavigate(item.path);
                  onClose();
                }}
                className={`group text-left py-2 px-3 rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                  isActive
                    ? 'bg-[#cef062]/30 text-[#000000]'
                    : 'hover:bg-[#eeeeea] text-[#000000]'
                }`}
              >
                <div className="flex flex-col">
                  <span className={`font-space text-2xl md:text-4xl uppercase tracking-tight font-medium ${
                    isActive ? 'text-[#516600] font-semibold' : 'text-[#000000] group-hover:text-[#516600]'
                  }`}>
                    {item.label}
                  </span>
                  <span className="font-geist text-xs text-[#6A6A6A] mt-0.5">
                    {item.desc}
                  </span>
                </div>
                <span className="material-symbols-outlined text-xl text-[#6A6A6A] group-hover:text-[#000000] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            );
          })}
        </nav>
      </div>

      {/* Menu Footer */}
      <div className="py-4 flex items-center justify-between font-inter text-xs text-[#6A6A6A] border-t border-[#DCDCD6] max-w-7xl w-full mx-auto">
        <span className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[#516600] inline-block animate-pulse" />
          Available for Freelance Design Projects
        </span>
        <span className="font-mono">DEL • 28°36'N / 77°13'E</span>
      </div>

    </div>
  );
};
