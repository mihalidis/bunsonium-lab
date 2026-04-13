export type ProjectStatus = 'live' | 'testing' | 'in progress' | 'paused' | 'in review' | 'archived'

export interface Project {
  slug: string
  title: string
  desc: string
  icon: string
  tag: string
  accent: string
  techs: string[]
  status?: ProjectStatus
  url?: string
}

export const projects: Project[] = [
  {
    slug: 'uyap-tebligat-ptt-takip',
    title: 'UYAP Tebligat PTT Takip',
    desc: 'UYAP üzerindeki PTT tebligat barkodlarını otomatik okuyup sorgulayan ücretsiz Chrome uzantısı.',
    icon: '📬',
    tag: 'Chrome Extension',
    accent: '#C0392B',
    techs: ['Chrome API', 'Vanilla JS', 'PTT'],
    status: 'live',
  },
  {
    slug: 'happy-little-ipsum',
    title: 'Happy Little Ipsum',
    desc: 'Bob Ross quotes-powered Lorem Ipsum generator. Two modes, one-click copy.',
    icon: '🎨',
    tag: 'Web App',
    accent: '#4a7c59',
    techs: ['Next.js', 'TypeScript', 'Bob Ross'],
    status: 'live',
    url: 'https://happy-little-ipsum.vercel.app',
  },
  {
    slug: 'pixel-tape',
    title: 'PixelTape',
    desc: 'Ruler, color picker, and outline mode for any webpage. A minimal Chrome extension for frontend devs and QA testers.',
    icon: '📐',
    tag: 'Chrome Extension',
    accent: '#9575cd',
    techs: ['Chrome API', 'Vanilla JS', 'EyeDropper'],
    status: 'in review',
  },
  {
    slug: 'ghosty-raffle',
    title: 'GhostyRaffle',
    desc: 'A pixel-art secret gift exchange app where no one — not even the host — can see who got matched.',
    icon: '👻',
    tag: 'Web App',
    accent: '#a855f7',
    techs: ['Next.js', 'TypeScript', 'Resend'],
    status: 'live',
    url: 'https://ghosty-raffle.vercel.app',
  },
  {
    slug: 'inventqry',
    title: 'InventQRy',
    desc: 'QR code-powered home inventory app. Stick a code on any shelf, scan to see what\'s inside.',
    icon: '📦',
    tag: 'Mobile App',
    accent: '#4a7fd4',
    techs: ['React Native', 'QR Codes', 'iOS & Android'],
    status: 'testing',
  },
  {
    slug: 'piksel-pak',
    title: 'Piksel Pak',
    desc: 'Turn home chores into 16-bit quests. Daily, weekly & monthly cleaning routines — gamified.',
    icon: '🐢',
    tag: 'Mobile App',
    accent: '#4ade80',
    techs: ['React Native', 'Pixel Art', 'iOS & Android'],
    status: 'paused',
  },
]
