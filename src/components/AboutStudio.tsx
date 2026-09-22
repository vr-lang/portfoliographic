import React, { useState } from 'react';

interface AboutStudioProps {
  onNavigate: (path: string) => void;
}

export const AboutStudio: React.FC<AboutStudioProps> = ({ onNavigate }) => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', projectType: 'branding', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;
    setSubmitted(true);
  };

  const capabilities = [
    { title: '01 Brand Identity Systems', desc: 'Custom logomarks, typography guidelines, color systems, and corporate style suites.' },
    { title: '02 Brutalist & Swiss Typography', desc: 'Asymmetric grid systems, grotesque type specimens, and high-density poster compositions.' },
    { title: '03 Printed Matter & Editorial Zines', desc: 'Publication layouts, multi-page zines, event dossiers, and delegate accreditation passes.' },
    { title: '04 Event & Festival Graphics', desc: 'Keynote launch banners, laser stage backdrops, artist reveal posters, and signage.' },
    { title: '05 3D & Liquid Chrome Art', desc: 'Procedural metallic renders, ambigrams, specularity displacement, and visual art.' },
  ];

  return (
    <div className="flex flex-col w-full pt-16 pb-28 bg-[#faf9f5]">
      {/* Header Info */}
      <div className="px-4 md:px-8 pt-6 pb-4 max-w-7xl mx-auto w-full">
        <div className="flex items-center justify-between font-inter text-xs uppercase tracking-widest text-[#6A6A6A]">
          <span className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#516600] inline-block animate-pulse" />
            Available for Freelance Projects
          </span>
          <span className="font-mono text-[#000000]">DEL • 28°36'N / 77°13'E</span>
        </div>
        <h1 className="font-space text-3xl md:text-5xl uppercase tracking-tight text-[#000000] font-bold leading-none mt-2">
          05 — About Me
        </h1>
        <p className="font-inter text-xs md:text-sm uppercase tracking-wider text-[#6A6A6A] mt-1 font-medium">
          Yuvraj Singh • Graphic Designer &amp; Visual Artist
        </p>
      </div>

      {/* Bio Statement */}
      <section className="px-4 md:px-8 py-6 max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/50">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-4">
            <div className="p-4 rounded bg-[#eeeeea] border border-[#DCDCD6]">
              <div className="aspect-square w-full rounded bg-[#000000] text-[#cef062] flex flex-col items-center justify-center font-space font-bold text-4xl p-6 text-center">
                <span>YS*</span>
                <span className="font-inter text-xs text-[#ffffff] tracking-widest uppercase mt-3">
                  Portfolio 2026
                </span>
              </div>
              <div className="mt-4 flex flex-col gap-1 font-inter text-xs text-[#6A6A6A]">
                <div className="flex justify-between border-b border-[#DCDCD6] pb-1">
                  <span>Location</span>
                  <span className="text-[#000000] font-medium">New Delhi, IN</span>
                </div>
                <div className="flex justify-between border-b border-[#DCDCD6] py-1">
                  <span>Role</span>
                  <span className="text-[#000000] font-medium">Graphic Designer</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Experience</span>
                  <span className="text-[#000000] font-medium">3+ Years</span>
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-8 flex flex-col gap-4">
            <h2 className="font-space text-2xl md:text-3xl text-[#000000] font-bold tracking-tight">
              Crafting visual identities, Swiss grid typography, and high-impact graphic design.
            </h2>
            <p className="font-geist text-sm text-[#444748] leading-relaxed">
              I am an independent graphic designer based in New Delhi, India. My work focuses on Swiss modernist grid layout, neo-brutalist typography, brand identity systems, and poster art.
            </p>
            <p className="font-geist text-sm text-[#444748] leading-relaxed">
              Over the past three years, I have created visual design systems for college student unions, cultural festivals, corporate societies, automotive posters, and creative client projects.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-3 pt-2">
              <button
                onClick={() => onNavigate('the-corporates')}
                className="px-4 py-2 rounded bg-[#eeeeea] hover:bg-[#cef062] text-[#000000] font-inter text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                View Corporates Work
              </button>
              <button
                onClick={() => onNavigate('other-designs')}
                className="px-4 py-2 rounded bg-[#eeeeea] hover:bg-[#cef062] text-[#000000] font-inter text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
              >
                View Experimental Work
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities List */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/50">
        <span className="font-inter text-xs uppercase tracking-widest text-[#516600] font-bold block mb-4">
          Capabilities &amp; Design Services
        </span>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {capabilities.map((cap) => (
            <div key={cap.title} className="p-5 rounded bg-[#ffffff] border border-[#DCDCD6]">
              <h3 className="font-space text-base font-bold text-[#000000]">{cap.title}</h3>
              <p className="font-geist text-xs text-[#6A6A6A] mt-1.5 leading-relaxed">{cap.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Project Inquiry Form */}
      <section className="px-4 md:px-8 py-8 max-w-7xl mx-auto w-full border-t border-[#DCDCD6]/50">
        <div className="p-6 md:p-8 rounded bg-[#ffffff] border border-[#DCDCD6] shadow-xs">
          <span className="font-inter text-xs uppercase tracking-widest text-[#516600] font-bold block">
            Project Inquiry / Work Together
          </span>
          <h2 className="font-space text-2xl md:text-4xl uppercase tracking-tight text-[#000000] font-bold mt-2">
            Let's Build Something Great Together.
          </h2>
          <p className="font-geist text-xs md:text-sm text-[#6A6A6A] mt-1 max-w-xl">
            Currently available for freelance graphic design projects, brand identities, posters, and editorial publications.
          </p>

          {submitted ? (
            <div className="mt-6 p-4 rounded bg-[#cef062]/40 border border-[#516600] text-[#161e00] font-inter text-xs font-semibold uppercase tracking-wider animate-in fade-in">
              ✓ Inquiry transmitted successfully. I will respond within 24 business hours.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4 max-w-xl">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-[11px] uppercase tracking-wider text-[#000000] font-semibold">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="e.g. Alex Morgan"
                    className="h-10 px-3 rounded bg-[#faf9f5] border border-[#DCDCD6] text-xs font-geist text-[#000000] focus:outline-none focus:border-[#516600]"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-inter text-[11px] uppercase tracking-wider text-[#000000] font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="h-10 px-3 rounded bg-[#faf9f5] border border-[#DCDCD6] text-xs font-geist text-[#000000] focus:outline-none focus:border-[#516600]"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-inter text-[11px] uppercase tracking-wider text-[#000000] font-semibold">
                  Project Category
                </label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="h-10 px-3 rounded bg-[#faf9f5] border border-[#DCDCD6] text-xs font-geist text-[#000000] focus:outline-none focus:border-[#516600]"
                >
                  <option value="branding">Brand Identity System</option>
                  <option value="editorial">Editorial / Publication Design</option>
                  <option value="events">Event &amp; Festival Visual Identity</option>
                  <option value="poster">Poster &amp; Typography Artwork</option>
                  <option value="other">Other Graphic Design Project</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="font-inter text-[11px] uppercase tracking-wider text-[#000000] font-semibold">
                  Project Details
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your vision, timeline, and deliverables..."
                  className="p-3 rounded bg-[#faf9f5] border border-[#DCDCD6] text-xs font-geist text-[#000000] focus:outline-none focus:border-[#516600]"
                />
              </div>

              <button
                type="submit"
                className="h-11 px-6 rounded bg-[#000000] hover:bg-[#516600] text-[#ffffff] font-inter text-xs uppercase tracking-wider font-bold transition-colors cursor-pointer self-start"
              >
                Send Project Inquiry
              </button>
            </form>
          )}
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

