import React from 'react';

interface BottomNavProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

export const BottomNav: React.FC<BottomNavProps> = ({ currentPath, onNavigate }) => {
  const tabs = [
    { id: 'work-home', label: 'Work', icon: 'grid_view' },
    { id: 'the-corporates', label: 'Corp', icon: 'domain' },
    { id: 'umang', label: 'Umang', icon: 'auto_awesome' },
    { id: 'other-designs', label: 'Other', icon: 'style' },
    { id: 'about', label: 'Studio', icon: 'person' },
  ];

  return (
    <nav className="fixed bottom-0 inset-x-0 z-40 pb-safe bg-[#faf9f5]/90 backdrop-blur-xl border-t border-[#DCDCD6]/50">
      <div className="flex justify-around items-center h-16 max-w-md mx-auto px-2">
        {tabs.map((tab) => {
          const isActive = currentPath === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onNavigate(tab.id)}
              className={`flex flex-col items-center justify-center min-w-[48px] min-h-[44px] px-2 py-1 rounded-md transition-all cursor-pointer ${
                isActive
                  ? 'text-[#000000] bg-[#cef062]/60 font-semibold shadow-xs'
                  : 'text-[#6A6A6A] hover:text-[#000000] hover:bg-[#eeeeea]'
              }`}
            >
              <span className="material-symbols-outlined text-xl">{tab.icon}</span>
              <span className="font-inter text-[10px] uppercase tracking-wider mt-0.5 font-medium">
                {tab.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
