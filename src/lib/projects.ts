export type ProjectStatus = 'live' | 'testing' | 'in progress' | 'paused'

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
    status: 'testing',
  },
  {
    slug: 'happy-little-ipsum',
    title: 'Happy Little Ipsum',
    desc: 'Bob Ross quotes-powered Lorem Ipsum generator. Two modes, one-click copy, free forever.',
    icon: '🎨',
    tag: 'Web App',
    accent: '#4a7c59',
    techs: ['Next.js', 'TypeScript', 'Bob Ross'],
    status: 'live',
    url: 'https://happy-little-ipsum.vercel.app',
  },
]
