import type { Metadata } from 'next'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Piksel Pak — Retro Temizlik Macerası',
  description:
    'Turn home chores into epic 16-bit quests. Daily routines, weekly missions, and monthly boss fights — guided by a pixel turtle.',
  openGraph: {
    title: 'Piksel Pak',
    description: 'Cleaning is boring. Questing is not.',
    type: 'website',
  },
}

export default function PikselPakPage() {
  return (
    <>
      <AppNav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.pixelGrid} aria-hidden="true" />
          <div className={styles.heroGlow} />

          {/* Decorative pixel bubbles */}
          <div className={styles.bubble1} aria-hidden="true" />
          <div className={styles.bubble2} aria-hidden="true" />
          <div className={styles.bubble3} aria-hidden="true" />
          <div className={styles.bubble4} aria-hidden="true" />

          <div className={styles.heroInner}>
            <Link href="/" className={styles.backLink}>
              ← All Projects
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgePulse} />
              <span>Mobile App · 16-Bit · In Development</span>
            </div>

            <div className={styles.logoWrap}>
              <h1 className={styles.heroTitle}>
                <span className={styles.titleLine1}>PIKSEL</span>
                <span className={styles.titleLine2}>PAK</span>
              </h1>
            </div>

            <p className={styles.heroTagline}>RETRO TEMİZLİK MACERASI</p>

            <p className={styles.heroSub}>
              Cleaning is boring. Questing is not. Turn every chore into a 16-bit adventure,
              guided by a pixel turtle who never skips leg day — or the bathroom.
            </p>

            <div className={styles.heroActions}>
              <div className={styles.btnComingSoon}>
                <ControllerIcon />
                Coming Soon to App Stores
              </div>
              <a href="#quest-modes" className={styles.btnSecondary}>
                View Quest Modes →
              </a>
            </div>

            {/* Mockup placeholder */}
            <div className={styles.mockupPlaceholder}>
              <div className={styles.mockupBlur} aria-hidden="true" />
              <div className={styles.mockupContent}>
                <span className={styles.mockupIcon}>🐢</span>
                <p className={styles.mockupLabel}>Mockup Coming Soon</p>
                <p className={styles.mockupSub}>Design in progress</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────── */}
        <div className={styles.statsBar}>
          {[
            { num: '3',      label: 'Quest Types' },
            { num: '16-BIT', label: 'Pixel Art UI' },
            { num: '∞',      label: 'Clean Home' },
            { num: 'iOS+',   label: 'Android' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── Quest Modes ────────────────────── */}
        <section id="quest-modes" className={styles.section}>
          <div className={styles.sectionLabel}>Quest System</div>
          <h2 className={styles.sectionTitle}>
            PICK YOUR<br /><span className={styles.green}>QUEST.</span>
          </h2>
          <p className={styles.sectionDesc}>
            Three quest tiers, one clean home. Every chore has its place in the game loop.
          </p>

          <div className={styles.questGrid}>
            {questModes.map((mode) => (
              <div key={mode.title} className={styles.questCard} style={{ '--quest-color': mode.color } as React.CSSProperties}>
                <div className={styles.questHeader}>
                  <div className={styles.questIcon}>{mode.icon}</div>
                  <div className={styles.questTier}>{mode.tier}</div>
                </div>
                <h3 className={styles.questTitle}>{mode.title}</h3>
                <p className={styles.questSubtitle}>{mode.subtitle}</p>
                <p className={styles.questDesc}>{mode.desc}</p>
                <div className={styles.questTasks}>
                  {mode.tasks.map((task) => (
                    <div key={task} className={styles.questTask}>
                      <span className={styles.pixelCheck} />
                      {task}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ───────────────────── */}
        <section id="how-it-works" className={styles.section}>
          <div className={styles.sectionLabel}>How It Works</div>
          <h2 className={styles.sectionTitle}>
            CLEAN.<br /><span className={styles.green}>CHECK.</span> LEVEL UP.
          </h2>
          <p className={styles.sectionDesc}>
            The &ldquo;a little, often&rdquo; philosophy — turned into a game you actually want to play.
          </p>

          <div className={styles.stepsGrid}>
            {steps.map((step) => (
              <div key={step.num} className={styles.stepCard}>
                <div className={styles.stepNumBig}>{step.num}</div>
                <div className={styles.stepIconWrap}>{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── Features ───────────────────────── */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionLabel}>Features</div>
          <h2 className={styles.sectionTitle}>
            NOT A<br /><span className={styles.green}>CHORE</span> ANYMORE
          </h2>
          <p className={styles.sectionDesc}>
            Every pixel, every checkbox, every sound effect exists to make the mundane feel epic.
          </p>

          <div className={styles.featuresGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featCard}>
                <div className={styles.featIconBox}>{f.icon}</div>
                <div>
                  <h3 className={styles.featTitle}>{f.title}</h3>
                  <p className={styles.featDesc}>{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaTurtleIcon} aria-hidden="true">🐢</div>
            <h2 className={styles.ctaTitle}>
              START YOUR<br /><span className={styles.green}>ADVENTURE</span>
            </h2>
            <p className={styles.ctaDesc}>
              Piksel Pak is in active development. Your pixel turtle awaits.
            </p>
            <div className={styles.ctaBtnComingSoon}>
              <ControllerIcon />
              Coming Soon to App Stores
            </div>
          </div>
        </section>

      </div>

      <AppFooter />
    </>
  )
}

/* ── Icons ───────────────────────────────────────── */

function ControllerIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="6" width="20" height="12" rx="2" />
      <path d="M6 12h4M8 10v4M15 11h.01M17 13h.01" />
    </svg>
  )
}

/* ── Static data ─────────────────────────────────── */

const questModes = [
  {
    icon: '⚔️',
    tier: 'DAILY QUEST',
    title: 'Günlük Rutinler',
    subtitle: 'Reset: Midnight',
    color: '#4ade80',
    desc: 'Auto-resets every midnight. 15-minute tasks that keep your home at zero. Never let the chaos compound.',
    tasks: ['Yatak odası: Yatağı topla', 'Banyo: Lavaboyu sil', 'Mutfak: Ocağı sil', 'Salon: Dağınıklığı topla'],
  },
  {
    icon: '🗺️',
    tier: 'WEEKLY MISSION',
    title: 'Haftalık Plan',
    subtitle: 'Per Day Assignment',
    color: '#facc15',
    desc: 'Each weekday gets its own room. Focused, efficient — no overwhelm. Monday is bedroom, Wednesday is kitchen.',
    tasks: ['Pazartesi: Nevresim değiştir', 'Çarşamba: Bulaşık mak.', 'Cuma: Tüm zeminleri süpür', 'Cumartesi: Koltuk temizliği'],
  },
  {
    icon: '👹',
    tier: 'BOSS FIGHT',
    title: 'Aylık Döngü',
    subtitle: '4-Week Rotation',
    color: '#f87171',
    desc: 'The deep cleans. Oven, fridge, closet reorganization — spread across 4 weeks so no single day destroys you.',
    tasks: ['1. Hafta: Fırın/davlumbaz', '2. Hafta: Bulaşık & çamaşır mak.', '3. Hafta: Koltuk iç süpür', '4. Hafta: Mutfak dolap içleri'],
  },
]

const steps = [
  {
    num: '01',
    icon: '🐢',
    title: 'Meet Your Guide',
    desc: 'Your pixel turtle loads up the quest board for the day. 15 minutes of tasks, sorted and ready. No decision fatigue.',
  },
  {
    num: '02',
    icon: '✅',
    title: 'Check the Boxes',
    desc: 'Complete a task, tap the checkbox. Watch it flip from empty to pixel-green. Satisfying every single time.',
  },
  {
    num: '03',
    icon: '🏆',
    title: 'Keep the Streak',
    desc: 'Daily resets keep the loop fresh. Weekly and monthly quests level up as you build the habit. Consistency wins.',
  },
]

const features = [
  { icon: '🎮', title: 'Gamified Checklists',   desc: 'Every task is a quest. Every checkbox a micro-win. The pixel UI turns your floor plan into a dungeon map.' },
  { icon: '🔄', title: 'Auto-Reset Daily',       desc: 'Daily quests wipe clean at midnight. No guilt from yesterday. Every morning is a fresh start on the same board.' },
  { icon: '📅', title: 'Smart Scheduling',       desc: 'Weekly tasks know which day they belong to. You only see what\'s relevant today — no endless scrolling through all chores.' },
  { icon: '🐢', title: 'Pixel Turtle Mascot',    desc: 'Your hardworking guide is always on screen. Broom in one hand, spray bottle in the other — ready when you are.' },
  { icon: '🎨', title: '16-Bit Pixel Art UI',    desc: 'Thick panel borders, chunky checkboxes, retro color palette. An app that looks as good as it functions.' },
  { icon: '📱', title: 'iOS & Android',          desc: 'Built for mobile-first. Your quest board lives in your pocket, ready to brief you on the next 15 minutes.' },
]
