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
]
