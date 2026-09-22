import React from 'react';

interface WorkHomeProps {
  onNavigate: (path: string) => void;
}

export const WorkHome: React.FC<WorkHomeProps> = ({ onNavigate }) => {
  const sections = [
    {
      id: 'the-corporates',
      vol: 'Vol. 01',
      count: '15 Artifacts',
      title: 'The Corporates',
      image: '/images/landing/landing_corporates.jpg',
      alt: 'The Corporates — Satyawati College Auditorium Event Poster',
      description:
        'Commerce Society visual identity, brutalist launch banners, keynote posters, and event assets at Satyawati College.',
      btnLabel: 'Explore Corporates',
    },
    {
      id: 'umang',
      vol: 'Vol. 02',
      count: '4 Artifacts',
      title: 'Umang Fest',
      image: '/images/landing/landing_umang.jpg',
      alt: 'Umang Fest — Annual Cultural Festival Artist Reveal Poster',
      description:
        'Annual cultural festival visual identity — sponsor announcements, headliner artist reveals (Krrish Rao, Antidote), and retro city skyline teaser banners.',
      btnLabel: 'Explore Umang Fest',
    },
    {
      id: 'other-designs',
      vol: 'Vol. 03',
      count: '14 Artifacts',
      title: 'Other Designs',
      image: '/images/landing/landing_other.jpg',
      alt: 'Other Designs — Porsche GTR Brutalist Graphic Poster',
      description:
        'Personal, uncommissioned Swiss grid layouts, Porsche GTR automotive graphic art, liquid chrome 3D ambigrams, and printed editorial matter.',
      btnLabel: 'Explore Other Designs',
    },
  ];

  return (
    <div className="flex flex-col w-full pt-16 pb-28 bg-[#faf9f5]">
      {/* Hero Header Statement */}
      <section className="px-4 md:px-8 pt-8 pb-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between font-inter text-xs uppercase tracking-widest text-[#516600] font-bold">
          <span>Personal Graphic Design Portfolio</span>

          <span>Archive 2023–2026</span>
        </div>
        <h1 className="font-space text-4xl sm:text-6xl md:text-7xl uppercase tracking-tight text-[#000000] font-extrabold mt-3 leading-[0.95]">
          Visual Systems<br />
          &amp; Brutalist Typography
        </h1>
        <p className="font-geist text-sm md:text-base text-[#444748] max-w-2xl mt-4 leading-relaxed font-normal">
          Personal &amp; commissioned portfolio of graphic designer <strong className="text-[#000000]">Yuvraj Singh</strong>. Specializing in brand identity, high-density Swiss layout grids, liquid chrome renderings, printed editorial matter, and event graphics.
        </p>

        {/* Action Pills */}
        <div className="flex flex-wrap items-center gap-3 mt-6">
          <button
            onClick={() => onNavigate('the-corporates')}
            className="px-4 py-2 rounded bg-[#000000] text-[#ffffff] font-inter text-xs uppercase tracking-wider font-semibold hover:bg-[#516600] transition-colors cursor-pointer"
          >
            Explore 02 Corporates
          </button>
          <button
            onClick={() => onNavigate('other-designs')}
            className="px-4 py-2 rounded bg-[#cef062] text-[#161e00] font-inter text-xs uppercase tracking-wider font-bold hover:bg-[#b2d349] transition-colors cursor-pointer"
          >
            Explore 04 Other Designs
          </button>
        </div>
      </section>

      {/* Main Archive Index Cards */}
      <section className="px-4 md:px-8 py-6 max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/50">
        <div className="flex items-center justify-between mb-6">
          <span className="font-inter text-xs uppercase tracking-widest text-[#6A6A6A] font-bold">
            01 / Archive Directory
          </span>
          <span className="font-inter text-xs text-[#6A6A6A]">3 Primary Collections</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {sections.map((sec) => (
            <div
              key={sec.id}
              onClick={() => onNavigate(sec.id)}
              className="group relative p-5 rounded bg-[#ffffff] border border-[#DCDCD6] hover:border-[#516600] transition-all cursor-pointer shadow-xs flex flex-col justify-between"
            >
              <div>
                {/* Vol & Count */}
                <div className="flex items-center justify-between font-inter text-[11px] uppercase tracking-widest text-[#516600] font-bold">
                  <span>{sec.vol}</span>
                  <span>{sec.count}</span>
                </div>

                {/* Section Title */}
                <h2 className="font-space text-2xl uppercase tracking-tight text-[#000000] font-bold mt-2 group-hover:text-[#516600] transition-colors">
                  {sec.title}
                </h2>

                {/* Featured Image Above Description */}
                <div className="my-4 aspect-[4/5] w-full rounded overflow-hidden bg-[#eeeeea] border border-[#DCDCD6]/50 relative">
                  <img
                    src={sec.image}
                    alt={sec.alt}
                    className="w-full h-full object-cover block group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Section Description */}
                <p className="font-geist text-xs text-[#6A6A6A] leading-relaxed">
                  {sec.description}
                </p>
              </div>

              {/* Action Link Footer */}
              <div className="mt-5 pt-3 border-t border-[#DCDCD6]/40 flex items-center justify-between font-inter text-xs">
                <span className="text-[#000000] font-semibold uppercase tracking-wider group-hover:text-[#516600] transition-colors">
                  Open {sec.title}
                </span>
                <span className="material-symbols-outlined text-base group-hover:translate-x-1 transition-transform text-[#516600]">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 px-4 md:px-8 pb-4 flex flex-col gap-2 text-[#6A6A6A] max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/40 pt-6">
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
