export interface GalleryItem {
  id: string;
  title: string;
  category: 'posters' | 'branding' | 'editorial' | 'social' | 'events' | 'experimental';
  aspectRatio: string; // e.g. '16/9', '3/4', '4/5', '1/1'
  src: string;
  alt: string;
  tag: string; // Used in lightbox header
  year?: string;
  description?: string;
}

export interface CollectionInfo {
  id: string;
  title: string;
  subtitle: string;
  archiveYears: string;
  itemCount: number;
  description: string;
  path: string;
}

export const COLLECTIONS: Record<string, CollectionInfo> = {
  'work-home': {
    id: 'work-home',
    title: '01 — Selected Work',
    subtitle: 'Curated Graphic Design Archives & Visual Explorations',
    archiveYears: '2023–2026',
    itemCount: 33,
    description: 'Personal graphic design portfolio of Yuvraj Singh — brand identity systems, Swiss editorial layouts, brutalist posters, festival designs, and custom typography.',
    path: 'work-home'
  },

  'the-corporates': {
    id: 'the-corporates',
    title: '02 — The Corporates',
    subtitle: 'Commerce Society Visual Design • Satyawati College',
    archiveYears: '2023–2024',
    itemCount: 15,
    description: 'Comprehensive brand identity, keynote posters, event backdrops, and social media campaigns engineered for Satyawati College\'s flagship Commerce Society.',
    path: 'the-corporates'
  },

  'umang': {
    id: 'umang',
    title: '03 — Umang Fest',
    subtitle: 'Annual Cultural Festival Visual Design',
    archiveYears: '2026',
    itemCount: 4,
    description: 'High-octane visual identity for Satyawati College\'s annual cultural fest Umang \'26 — official sponsor call, artist reveals (Krrish Rao, Antidote), and retro city skyline teaser banner.',
    path: 'umang'
  },

  'other-designs': {
    id: 'other-designs',
    title: '04 — Other Designs',
    subtitle: 'Personal, Experimental, Typography & Digital Artwork',
    archiveYears: '2023–2026',
    itemCount: 14,
    description: 'Personal explorations in Swiss grid systems, brutalist chrome typography, Porsche automotive graphics, and printed editorial matter.',
    path: 'other-designs'
  },

  'about': {
    id: 'about',
    title: '05 — About Me',
    subtitle: 'Graphic Designer & Visual Artist',
    archiveYears: 'New Delhi, IN',
    itemCount: 0,
    description: 'Personal portfolio of Yuvraj Singh, a freelance graphic designer specializing in brand identity, editorial layout, brutalist typography, and poster design.',
    path: 'about'
  }
};


export const CORPORATES_ITEMS: GalleryItem[] = [
  {
    id: 'corp-01',
    title: 'Brutalist Commerce Launch Banner',
    category: 'branding',
    aspectRatio: '16/9',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO60vkXtUNje2c-Qcu4wlS_KyW4o-w0D4X8NNanzCq_SScXDdS0PPCJ2kBrLpIH1LqEDU7-XqbGl16qvmAxEGgl4PyjVbAVPkYnmMnYuuCGaMTn7AGmUiqSVKxk3ZBPG2U9iJhsASueP4mvaueoeXZ4E4jzSJnFYMJevHY6uzXracCMslBOSc8BnIzbeknEqteRJq0H77-4T1eAU77ie01b9PIra6Bu7M6nfboXMc9Ez1hvb0vKlNWzLJUqfDDlonO5p9NSIKtbOyE0Q0',
    alt: 'Brutalist commerce fest brand launch banner',
    tag: 'BRANDING // LAUNCH BANNER',
    year: '2024',
    description: 'Widescreen promotional masthead designed for the annual Commerce Society launch event.'
  },
  {
    id: 'corp-02',
    title: 'Academic Keynote Lecture Poster',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIW6VcPvSlCnmfHa75m_iYyaEOX96AVdOulUegLS41EFja0aWTvUQK0kHgKLhuhmj9n887CMeNKWCsX8yQbcCkdm-ntYSP2DXfmYEjMR-aOlDIYL3kp4tfGBBGE9NNzerJwz_E3G1Uli1xmg9zF09KaQoJeYprs19VjGq-94xejf_r_-rby7qcZ9qUPJa7wrydfTkHpTBFOIi1YwZXbtQGJudUo7MvarNCVgCAah74u42HkP_WfmYPkE472O7jH1fmuvR1dxf6YM5iaU',
    alt: 'Avant-garde academic keynote lecture poster',
    tag: 'POSTER // KEYNOTE \'24',
    year: '2024',
    description: 'High-contrast typography poster announcing the keynote address on global macroeconomic shifts.'
  },
  {
    id: 'corp-03',
    title: 'Executive Recruitment Carousel',
    category: 'social',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAxS1xLxG2y_JBVJ9Ju7TYSdD_Jhkl9f8YHtZ49SFg5lWWyiw7543_JBiJxfGmdbNDwG5sIcFZ2Wn9COwc5QD0jTbWUJmdu6-i3tZhxjfWhmNlZCopPn2aOgap6uXtgkhcTYLoj7Itut0fyIMA-knZ9I41nnJu54ink2Mbj-M-T8S9i5WpHPVErDVv2X_vovx_jXbEr2viuF3tP5fV3qRXGecQbZ_w_gxue0eQF0CEJA3LdH8gPvbbP31OFQz1b6zCcHKRPXeAbCxunfeg',
    alt: 'Instagram executive hiring carousel cover',
    tag: 'SOCIAL // RECRUITMENT',
    year: '2023',
    description: 'Social media induction slide deck cover highlighting society departments and leadership roles.'
  },
  {
    id: 'corp-04',
    title: 'Mock Stock Exchange Artwork',
    category: 'events',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01UfpuhPtbkl7C3_dAJKIPtUxY6GbZsWsBKQwMNWqrYBHTgA_iQNJne-noYg-fw4n_Eqr7YmIq-bMf-uIGUQGqL8_Y8Z7tee7LDaS8fRiWpEpF6_vc4gwLNaEqL6QPPNd9E14uUI-KDFGR4UxIPb-8y3AbieeJGjigtvhib9J1Ns06LUWtBVJahBjp7XKAt6yeXi56upjzdoWR0mqqoFbvTHggnFCrAfZboXfjzgvvev1gHtxYmPpXsRZRypvEjxQc0IGlXOjjaJGMpA',
    alt: 'Mock Stock Exchange graphic artwork',
    tag: 'EVENTS // MOCK STOCK',
    year: '2024',
    description: 'Square branding artwork for the live trading floor simulation competition.'
  },
  {
    id: 'corp-05',
    title: 'Financial Literacy Quiz Module',
    category: 'social',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_QpyJwClc_OSNyOzeuDzB8PpLIJ3KRmgT2nmHHOlMF86CUVUyUUHzovo6YKzCL3pkQvHKmE8u4V_ANwQ1AZC9EtsCdWyTuww1r4E0xCImfUH_nGapxBjJFM02c8ezDa71YtRTJaSa1TDGYT9He1ucCjzSZw8461Vxlv6OaDXNlbdytEtlseN_D7dood0YCBHm-EV3nbqsTWj9E891w40Wg5IK_25V9IZ8f36MbILT52qbw9HWtfxAyLYq-uWU0Sd5hSLnFIKBLI4Ossk',
    alt: 'Interactive graphic design quiz slide for social media',
    tag: 'SOCIAL // QUIZ SERIES',
    year: '2024',
    description: 'Educational social carousel slide breaking down complex corporate valuation metrics.'
  },
  {
    id: 'corp-06',
    title: 'Festival Schedule & Ledger Matrix',
    category: 'editorial',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfDSj7UqpalBPrdN5gEe5hb3bGbRFwTLZ72cabZdSTTihDA9O0rx6eza2eoIHPWpfOM9IVjeL-4lpABV5dGkoP0kYS64qT5sbN1UBvXcsc69DDZrJO4IuYI4nye-u_MTeQxLMVu1QTIOkVjsBiMg6lJTHmrk-N46yPOS-2uTfYRRbjA9BCRkMQVmqrC7mJKDqxKC7AeP29MO6fwOyJQsM1X3o9t39dmbuVp_L3i22D2hR91LQt6CVqQFCNqYbAv1cfe1ZepQvcYeLx4s',
    alt: 'Editorial festival schedule tabular print poster',
    tag: 'EDITORIAL // SCHEDULE',
    year: '2024',
    description: 'Swiss-grid tabular print poster outlining two-day event schedules, venues, and cash prizes.'
  },
  {
    id: 'corp-07',
    title: 'Trade Logistics & Supply Chain Poster',
    category: 'posters',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApzoJCJa9ie_soSDdTHC0C9Cn3zidljFQtQbT7GUH2pY7VVtrQNvbHJQH7cIkqH9bg5U_Sa6oqUpHHfSgzHNnG1gHkYBgR56DmXHnpPCbBZpWAVtxUMQJYwT_d2_r1vG55ab5fGufGGXneRJDPdK48wqm-4h1qxsC2q0spVHVSLh2BOXD_KkKVnlFf_0Q6AyX-lfbUT32iTgiI1I4052Zli-Dk--DY34P1LLhxOAgRzl0Ugaf3EtwVcy_vE4mmZCIcvAnGErZpqo5bSJQ',
    alt: 'Typographic poster exploring supply chain and global trade dynamics',
    tag: 'POSTERS // LOGISTICS',
    year: '2023',
    description: 'Experimental typographic composition mapping international trade corridors.'
  },
  {
    id: 'corp-08',
    title: 'Countdown Social Announcement',
    category: 'social',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAQckeMhHe3w1t0t-Qe8klkzABL4aVYVXm0NPukNncUVXoeokgX0EZqZWDaEAv2cxh2a_fFczSkKV3__yvfLzMl7x77nNxn-1AMGwWTXw-zBkvmD0hLXw34oI8dF3xdlGNcOfITP16BiwhwwexuRTrP4hI8a2Chgc1APCYeRXKYauRpztOaOB9iRdK9ssgCSNx-7Ju05aGa4V8LxspqzdtypFUjY94h8Gr0ktxHNk2OK6bcNFGm4BUGCC022q9PsY72JoUi2kXsFhVThrs',
    alt: 'Social media countdown announcement tile',
    tag: 'SOCIAL // COUNTDOWN',
    year: '2024',
    description: 'High-impact 24-hour registration countdown tile for social feeds.'
  },
  {
    id: 'corp-09',
    title: 'Newsletter Header Masthead',
    category: 'branding',
    aspectRatio: '16/9',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUsNB9PoRi5ZkPMGq6nN02WfJ8znLRq0tknFTFAPCagU1D0tJ1mPE1HR81wycHSyH9_ethxqBpcNcyB8Eynrzc_z2zc6naZZnV5UKrEhyQ5DfRvbO-fyLfQIVaUPcFJdBLQAISE_ySa48rDa4WGSgpfTbAKEN7tikccdilyjgL7hpLGCUcNmbO4hgHgO-FB6yMMU_gZ5UNBG7XkWnq3GDdVsxNla39OOjY06y1fzvPxoc6qkLoKWf5Y2peAtf2iEGuA4JJSSiUensQZb0',
    alt: 'Newsletter header banner and society emblem masthead',
    tag: 'BRANDING // NEWSLETTER',
    year: '2024',
    description: 'Official digital publication header and custom monogram emblem system.'
  },
  {
    id: 'corp-10',
    title: 'Case Study Presentation Deck Slide',
    category: 'events',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALCg9s9j8pMcUOdRjF0SAN0KicE2hqefai6pD_EQp51MuEXFXs2OhZe5gjJaJBkD4gnD4vrtCz2QHpS54M1jlgdz8NtefR8i7BK1iI3k6gzvvXJBm6De7TEKrls6xgmtIGEcXkd8rk38hV9vBRgnofuRJ6Pd9RwEseHtTMQ4KX3ad9P8op8EQt8IYoRugBGjjaLr5EfJqYgiUfc8Efp40N3xtE573js0KitxmfEUv6U_VHlRWVH5tL3rR0VerPNjE2Uhd1tXbPsfH4l84',
    alt: 'Case study presentation deck slide and model comparisons',
    tag: 'EVENTS // CASE STUDY',
    year: '2024',
    description: 'Visual template for case study analysis competition final presentations.'
  },
  {
    id: 'corp-11',
    title: 'Fiscal Creed Typographic Poster',
    category: 'posters',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6SblLmiIBQ23zaLUa09xmc-AWP2MTbPYSrh5ukhArfxR27apWPjUMW7geJboye8EuNIIllxizd7SQpzD0PnkEpmihzW-XG-ULBNXeIxWbpOxojn01DBSYiNVaGYsriopnRpORgtebzSmFr_kvzj-VSM0UeUh15o3-Vut_OM-5ROsVr3wOLV7BYUaEKVG-4lnzN7ZERjadnd9qxetA0CE7iGJglVZ3NjskgtrEsbCdH7I2puBmIAVLgh8sU_N5ZJ8I0mXDjw-13h5v7VU',
    alt: 'Minimalist typography poster with giant quote',
    tag: 'POSTERS // CREED',
    year: '2023',
    description: 'Monochromatic architectural typography poster showcasing core organizational values.'
  },
  {
    id: 'corp-12',
    title: 'Partner Sponsor Grid Showcase',
    category: 'branding',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbc-uk9Ljsdk8n6HJWY0d107z1T6IyIX7F96uSjk7FIYOa2_5zqM7m1yV2IA3qkhBMgOwrhxC11vpIsJ-411uIXJ_4LeNMIAEetGTRwbOAs7TUJf6fLUhgWp3jFcYwVAss7wa6r8jOWdLP8yqBIeLrrpbtjP_Vc6sRYvz2kRwaXsk27dqTu93QnPYR7Rb-5gv6ZpTRHtIDXDmQYzCsreZ4itwwJJ0icr9Dif2vs4BM25sDoxEW39xZ6WSO2ldAkpPpQo0hhK4HKaBr68I',
    alt: 'Corporate sponsor showcase grid artwork',
    tag: 'BRANDING // SPONSORS',
    year: '2024',
    description: 'High-contrast logo alignment grid representing national corporate sponsors.'
  },
  {
    id: 'corp-13',
    title: 'Venture Capital Keynote Reveal',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALIW6VcPvSlCnmfHa75m_iYyaEOX96AVdOulUegLS41EFja0aWTvUQK0kHgKLhuhmj9n887CMeNKWCsX8yQbcCkdm-ntYSP2DXfmYEjMR-aOlDIYL3kp4tfGBBGE9NNzerJwz_E3G1Uli1xmg9zF09KaQoJeYprs19VjGq-94xejf_r_-rby7qcZ9qUPJa7wrydfTkHpTBFOIi1YwZXbtQGJudUo7MvarNCVgCAah74u42HkP_WfmYPkE472O7jH1fmuvR1dxf6YM5iaU',
    alt: 'Venture capital speaker reveal poster',
    tag: 'POSTERS // SPEAKER',
    year: '2024',
    description: 'VIP orator announcement poster combining portrait imagery with brutalist typography.'
  },
  {
    id: 'corp-14',
    title: 'Auditorium Projection Stage Screen',
    category: 'events',
    aspectRatio: '16/9',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO60vkXtUNje2c-Qcu4wlS_KyW4o-w0D4X8NNanzCq_SScXDdS0PPCJ2kBrLpIH1LqEDU7-XqbGl16qvmAxEGgl4PyjVbAVPkYnmMnYuuCGaMTn7AGmUiqSVKxk3ZBPG2U9iJhsASueP4mvaueoeXZ4E4jzSJnFYMJevHY6uzXracCMslBOSc8BnIzbeknEqteRJq0H77-4T1eAU77ie01b9PIra6Bu7M6nfboXMc9Ez1hvb0vKlNWzLJUqfDDlonO5p9NSIKtbOyE0Q0',
    alt: 'Main auditorium panoramic stage projection screen backdrop',
    tag: 'EVENTS // STAGE',
    year: '2024',
    description: 'Ultra-wide 4K projection display backdrop for the main stage auditorium speaker series.'
  },
  {
    id: 'corp-15',
    title: 'Delegate Accreditation Dossier Pass',
    category: 'editorial',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfDSj7UqpalBPrdN5gEe5hb3bGbRFwTLZ72cabZdSTTihDA9O0rx6eza2eoIHPWpfOM9IVjeL-4lpABV5dGkoP0kYS64qT5sbN1UBvXcsc69DDZrJO4IuYI4nye-u_MTeQxLMVu1QTIOkVjsBiMg6lJTHmrk-N46yPOS-2uTfYRRbjA9BCRkMQVmqrC7mJKDqxKC7AeP29MO6fwOyJQsM1X3o9t39dmbuVp_L3i22D2hR91LQt6CVqQFCNqYbAv1cfe1ZepQvcYeLx4s',
    alt: 'VIP and delegate accreditation pass design',
    tag: 'EDITORIAL // BADGE PASSES',
    year: '2024',
    description: 'Print dossier design for lanyard accreditation passes, speaker badges, and press credentials.'
  }
];

export const OTHER_DESIGNS_ITEMS: GalleryItem[] = [
  {
    id: 'other-01',
    title: 'Kinetik Swiss Grid No. 4',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaeJlsu0H7tzXVZVbVm1mRaraynKsQhbafGG4peLfeq2wsKbmbbqYwF7sOnjTYqTscFtagDtUitGyp3uysnPNi1DKjEzoWskOBVJ5zG4Ze9qWDlY5MUOJFNIz457Y5m498wbhJ4Lb6lYDBY-0s-GfUgRuuP0e9MMPr5X7-16c2kitDtA9acbo2VYDbUuuU_lnPN-6SlkrffuvDA8_uc6gjUFArz2f2iTniZHCHEWUP3D7hssJyKo0RF1Gdzi2MeDXrs-6sGdui22z_E0M',
    alt: 'Kinetik Swiss Grid No. 4 poster',
    tag: 'POSTER // SWISS GRID',
    year: '2025',
    description: 'Swiss typography poster exploring asymmetric modular grid alignment and heavy grotesque text hierarchy.'
  },
  {
    id: 'other-02',
    title: 'Liquid Chrome Ambigram',
    category: 'experimental',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBml9T2uufmNTdSVaaL1YBrYu9loUZa_uCUD4zkXvsb5bmbh3FGTVWaQrglVicO8cy4PPKTHRr0iTHDvEQfFwh0qNkB0iToRP-izbM-Vx_IW2q6gW6QZMiVckYWjhVMSvdVSatITxmRAr9S6YwOilD6us7DxcFSJfzSxDDwB3hw8ZQcwnynmPvmz77rwGJzSJyqAvZYcU70abtAVhy1RvksS-xitVXxbQtvRrNW3iWtfq98rJVl-A5dpbzFLB0lQKoUFDXiG3q7-0PRKnA',
    alt: 'Liquid Chrome Ambigram artwork',
    tag: 'EXPERIMENTAL // LIQUID CHROME',
    year: '2024',
    description: '3D metallic procedural render featuring fluid chrome typographic refraction and specular highlights.'
  },
  {
    id: 'other-03',
    title: 'Form Follows Friction',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAYIn51pmjvOjgfjt4IgeP7TbcY6DnO_WX2CSdklWIW7Z20pCsW2jbl4deiz6Kop8VztuSAmwBIN0qArmLg-9XTgOXGBoOLQE-pAl94xzbRqMAa6TiOPCs-Bbtk7ZQnZXg-el-djV1gO9CjJI5AhSzV2288bnSEfuiIh42mcHQ2aqUEnwfjm6GQ9QuCcXashWF9VE2kQU_utVGz7XhggacVNN6zOc474D2xOKFXH7qa6RFrTdzSBGusjN9E0z9DsDwozMJpsBWEthkedYA',
    alt: 'Form Follows Friction architectural poster',
    tag: 'POSTER // ARCHITECTURE',
    year: '2024',
    description: 'Architectural manifesto print poster investigating structural tension and high-density typography.'
  },
  {
    id: 'other-04',
    title: 'Monogram Identity Suite',
    category: 'branding',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEIOpa7i3BSadkwtmDgbyMuQkeN0LLDXJ80JnEvcU17wGJ2BVhqPDCdhSVTJSuLTDDZoRE6RO77hwmwNeAUpHxLJQlr1q7e_rwEnOASUek72MBoCXU4XOI04ASoZEPM-IlgCMd2z-aGT7Y_EndAeobHAl4A_sbyTe8008QXCcOqTIr_I_iPVPvGyh8Izw9cpPaBVRWet1VKrYj-2x5EdMlJggOAxn3eay8kFWA74iNriQo7bpSR93gyoNlbg4b303FR_fqAFRtuZ7RdbE',
    alt: 'Monogram Suite branding exploration',
    tag: 'BRANDING // MONOGRAM',
    year: '2024',
    description: 'Geometric monogram system created through interlocking glyph forms and precise optical weight distribution.'
  },
  {
    id: 'other-05',
    title: 'Fluid Structures Brutalist Typography',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDTQafx8fv_jJtVXA1vWLItjsyvcyxHUm2PSDugePgmvdrjp7rEcKmtoPx-ksWrzHNkhcaz_cWEuDkpbR4ePej0_ejxc-1m20m9jIFeTCSvABcFK0FbgXcP0qm5lZPFtBhrmuju4If94ukF1WpWDz8H255Pekx--6CJ0Ltu6bR2jDmXGLcMxTbpA5AkwekzAo6_C6_8df8qohbrELF0NeorQNmZLSWROtpq0xBiFrqswfkgRPVQFU6eYb22ZKjRBcOYp7dIXJNhcULmk64',
    alt: 'Fluid Structures - Brutalist chrome typography poster',
    tag: 'POSTER // FLUID STRUCTURES',
    year: '2024',
    description: 'Brutalist chrome typography exploration experimenting with volumetric letterforms and spatial shadow.'
  },
  {
    id: 'other-06',
    title: 'Vanguard Graphic Portfolio Poster',
    category: 'posters',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDfTPZOid36fcpWt61zGAZttk7UPNi4OPP__tsaOaE0NSB7qvfDM7Mf2RmbA6zN7yPjNdRNw0pmzQkonY4SXNsRCpoAwb7vgpoJSSPx8QJyemtOhCNXfKVhOrckqhG79yWi5GpUmtpPfE_UzRGFrtuGaO__P4UXAmkg05DURm5OviM1mF7uzsiVeuUcM2IpsSOxOInM0ovZjp7pRlz9vLUd110yKPN9cWJfEetORrFDHdj7sZj-ulpL834Z_vf5bFFyWAizJjwTOD4wZf8',
    alt: 'Graphic Design Portfolio 2024 - Avant-garde kinetic typography poster',
    tag: 'POSTER // VANGUARD',
    year: '2024',
    description: 'Avant-garde kinetic typography cover poster engineered with layered distortion and high-contrast headlines.'
  },
  {
    id: 'other-07',
    title: 'Structures of Light Architectural Poster',
    category: 'editorial',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAwNAPYSxBPgeB5XyrCUEG3nD0lcGCEHoBmz2uLRiH-n9PXnxQQVmV3N1LLUePd-OLXjc3Nh69BAX8oxG0c0QttZ1YPJt6sXv8nw8sGsWoolqnx-N87soiYcWFtrwZlfj0fKImMzvW4s_RoYTiqyBtfUTrK3Nwxb1GUnpmf68DFA_oKI3m6J5JoWSvHHrCYsieWfCYFrtGTSNoCosDAdn6__1U1qSYlCyOyDqjEqb-N0AvxYRkt0ODuJSvP5_kKzEwQsAgYnBAxfNsauxs',
    alt: 'Structures of Light - Architectural exhibition poster',
    tag: 'EDITORIAL // STRUCTURES OF LIGHT',
    year: '2024',
    description: 'Exhibition publication poster exploring shadow geometry, architectural light rays, and serif typography.'
  },
  {
    id: 'other-08',
    title: 'Cybernetic Vernacular Grid',
    category: 'experimental',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuApzoJCJa9ie_soSDdTHC0C9Cn3zidljFQtQbT7GUH2pY7VVtrQNvbHJQH7cIkqH9bg5U_Sa6oqUpHHfSgzHNnG1gHkYBgR56DmXHnpPCbBZpWAVtxUMQJYwT_d2_r1vG55ab5fGufGGXneRJDPdK48wqm-4h1qxsC2q0spVHVSLh2BOXD_KkKVnlFf_0Q6AyX-lfbUT32iTgiI1I4052Zli-Dk--DY34P1LLhxOAgRzl0Ugaf3EtwVcy_vE4mmZCIcvAnGErZpqo5bSJQ',
    alt: 'Cybernetic Vernacular procedural grid art',
    tag: 'EXPERIMENTAL // CYBERNETIC',
    year: '2024',
    description: 'Procedural digital artwork distorting vintage typewriter font metrics across matrix coordinates.'
  },
  {
    id: 'other-09',
    title: 'Neo-Brutalist Publication Ledger',
    category: 'editorial',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBJfDSj7UqpalBPrdN5gEe5hb3bGbRFwTLZ72cabZdSTTihDA9O0rx6eza2eoIHPWpfOM9IVjeL-4lpABV5dGkoP0kYS64qT5sbN1UBvXcsc69DDZrJO4IuYI4nye-u_MTeQxLMVu1QTIOkVjsBiMg6lJTHmrk-N46yPOS-2uTfYRRbjA9BCRkMQVmqrC7mJKDqxKC7AeP29MO6fwOyJQsM1X3o9t39dmbuVp_L3i22D2hR91LQt6CVqQFCNqYbAv1cfe1ZepQvcYeLx4s',
    alt: 'Neo-Brutalist Publication Ledger editorial poster',
    tag: 'EDITORIAL // LEDGER MATRIX',
    year: '2023',
    description: 'Minimalist editorial spread presenting technical print specs and paper weight matrices.'
  },
  {
    id: 'other-10',
    title: 'Synthetic Resonance Visual',
    category: 'experimental',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC01UfpuhPtbkl7C3_dAJKIPtUxY6GbZsWsBKQwMNWqrYBHTgA_iQNJne-noYg-fw4n_Eqr7YmIq-bMf-uIGUQGqL8_Y8Z7tee7LDaS8fRiWpEpF6_vc4gwLNaEqL6QPPNd9E14uUI-KDFGR4UxIPb-8y3AbieeJGjigtvhib9J1Ns06LUWtBVJahBjp7XKAt6yeXi56upjzdoWR0mqqoFbvTHggnFCrAfZboXfjzgvvev1gHtxYmPpXsRZRypvEjxQc0IGlXOjjaJGMpA',
    alt: 'Synthetic Resonance visual artwork',
    tag: 'EXPERIMENTAL // SYNTHETIC',
    year: '2025',
    description: 'Generative spectral gradient artwork exploring audio wave resonance translated to static medium.'
  },
  {
    id: 'other-11',
    title: 'Echoes of Type Specimen',
    category: 'posters',
    aspectRatio: '4/5',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6SblLmiIBQ23zaLUa09xmc-AWP2MTbPYSrh5ukhArfxR27apWPjUMW7geJboye8EuNIIllxizd7SQpzD0PnkEpmihzW-XG-ULBNXeIxWbpOxojn01DBSYiNVaGYsriopnRpORgtebzSmFr_kvzj-VSM0UeUh15o3-Vut_OM-5ROsVr3wOLV7BYUaEKVG-4lnzN7ZERjadnd9qxetA0CE7iGJglVZ3NjskgtrEsbCdH7I2puBmIAVLgh8sU_N5ZJ8I0mXDjw-13h5v7VU',
    alt: 'Echoes of Type specimen poster',
    tag: 'POSTER // TYPE SPECIMEN',
    year: '2023',
    description: 'Large-format grotesque type specimen sheet analyzing optical kerning and character anatomy.'
  },
  {
    id: 'other-12',
    title: 'Chromatic Variance Brand Mark',
    category: 'branding',
    aspectRatio: '1/1',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBbc-uk9Ljsdk8n6HJWY0d107z1T6IyIX7F96uSjk7FIYOa2_5zqM7m1yV2IA3qkhBMgOwrhxC11vpIsJ-411uIXJ_4LeNMIAEetGTRwbOAs7TUJf6fLUhgWp3jFcYwVAss7wa6r8jOWdLP8yqBIeLrrpbtjP_Vc6sRYvz2kRwaXsk27dqTu93QnPYR7Rb-5gv6ZpTRHtIDXDmQYzCsreZ4itwwJJ0icr9Dif2vs4BM25sDoxEW39xZ6WSO2ldAkpPpQo0hhK4HKaBr68I',
    alt: 'Chromatic Variance brand mark artwork',
    tag: 'BRANDING // CHROMATIC',
    year: '2024',
    description: 'Experimental identity mark generated through RGB chromatic aberration layering.'
  },
  {
    id: 'other-13',
    title: 'Distorted Horizon Monochrome',
    category: 'experimental',
    aspectRatio: '16/9',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCO60vkXtUNje2c-Qcu4wlS_KyW4o-w0D4X8NNanzCq_SScXDdS0PPCJ2kBrLpIH1LqEDU7-XqbGl16qvmAxEGgl4PyjVbAVPkYnmMnYuuCGaMTn7AGmUiqSVKxk3ZBPG2U9iJhsASueP4mvaueoeXZ4E4jzSJnFYMJevHY6uzXracCMslBOSc8BnIzbeknEqteRJq0H77-4T1eAU77ie01b9PIra6Bu7M6nfboXMc9Ez1hvb0vKlNWzLJUqfDDlonO5p9NSIKtbOyE0Q0',
    alt: 'Distorted Horizon monochromatic visual',
    tag: 'EXPERIMENTAL // MONOCHROME',
    year: '2024',
    description: 'Panoramic monochromatic spatial artwork capturing brutalist architectural vanishing points.'
  },
  {
    id: 'other-14',
    title: 'Modular Matrix Magazine Layout',
    category: 'editorial',
    aspectRatio: '3/4',
    src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuALCg9s9j8pMcUOdRjF0SAN0KicE2hqefai6pD_EQp51MuEXFXs2OhZe5gjJaJBkD4gnD4vrtCz2QHpS54M1jlgdz8NtefR8i7BK1iI3k6gzvvXJBm6De7TEKrls6xgmtIGEcXkd8rk38hV9vBRgnofuRJ6Pd9RwEseHtTMQ4KX3ad9P8op8EQt8IYoRugBGjjaLr5EfJqYgiUfc8Efp40N3xtE573js0KitxmfEUv6U_VHlRWVH5tL3rR0VerPNjE2Uhd1tXbPsfH4l84',
    alt: 'Modular Matrix magazine layout concept',
    tag: 'EDITORIAL // MODULAR MATRIX',
    year: '2024',
    description: 'Grid magazine layout prototype demonstrating variable column spanning and white space control.'
  }
];

export const UMANG_ITEMS: GalleryItem[] = [
  {
    id: 'umang-01',
    title: 'Call for Sponsors — Umang \'26',
    category: 'branding',
    aspectRatio: '4/5',
    src: '/images/umang/umang26_call_for_sponsors.jpg',
    alt: 'Satyawati College Students Union Annual Cultural Fest Umang 26 Call For Sponsors Poster',
    tag: 'UMANG \'26 // CALL FOR SPONSORS',
    year: '2026',
    description: 'Official sponsorship announcement poster for Satyawati College (M) Student\'s Union Annual Cultural Fest Umang \'26.'
  },
  {
    id: 'umang-02',
    title: 'Krrish Rao Artist Reveal — Umang \'26',
    category: 'posters',
    aspectRatio: '4/5',
    src: '/images/umang/umang26_krrish_rao.jpg',
    alt: 'Umang 26 Artist Reveal Poster featuring Krrish Rao - 10th April',
    tag: 'UMANG \'26 // KRRISH RAO',
    year: '2026',
    description: 'Headliner artist reveal poster for Krrish Rao performing live on 10th April at Satyawati College Annual Cultural Fest.'
  },
  {
    id: 'umang-03',
    title: 'Antidote Musix Artist Reveal — Umang \'26',
    category: 'posters',
    aspectRatio: '4/5',
    src: '/images/umang/umang26_antidote.jpg',
    alt: 'Umang 26 Artist Reveal Poster featuring Antidote Musix - 10th April',
    tag: 'UMANG \'26 // ANTIDOTE',
    year: '2026',
    description: 'Headline musical act reveal poster for Antidote performing live on 10th April at Umang \'26.'
  },
  {
    id: 'umang-04',
    title: 'Annual Cultural Fest Teaser Banner — Umang \'26',
    category: 'events',
    aspectRatio: '16/9',
    src: '/images/umang/umang26_coming_soon_banner.png',
    alt: 'Satyawati College Umang 26 Annual Cultural Fest Coming Soon City Skyline Banner',
    tag: 'UMANG \'26 // TEASER BANNER',
    year: '2026',
    description: 'Panoramic synth-wave city skyline teaser banner announcing Umang \'26 Annual Cultural Fest.'
  }
];

