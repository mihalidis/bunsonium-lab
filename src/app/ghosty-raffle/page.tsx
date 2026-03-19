import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'GhostyRaffle — Private Secret Gift Exchange',
  description:
    'A pixel-art secret gift exchange app where no one — not even the host — can see who got matched with whom.',
  openGraph: {
    title: 'GhostyRaffle',
    description: 'Secret gift exchange. Zero data stored. Full pixel-art vibes.',
    type: 'website',
  },
}

export default function GhostyRafflePage() {
  return (
    <>
      <AppNav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.ghostBg} aria-hidden="true">
            <div className={styles.ghostGlow} />
            <div className={styles.particle1} />
            <div className={styles.particle2} />
            <div className={styles.particle3} />
          </div>

          <div className={styles.heroInner}>
            <Link href="/" className={styles.backLink}>
              ← All Projects
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span>Web App · Privacy-First · Pixel Art</span>
            </div>

            <h1 className={styles.heroTitle}>
              GHOSTY<br />
              <span className={styles.purple}>RAFFLE</span>
            </h1>

            <p className={styles.heroSub}>
              A secret gift exchange app where no one — not even the host —
              can see who got matched with whom. Zero data stored.
            </p>

            <div className={styles.heroActions}>
              <a
                href="https://ghosty-raffle.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <GhostIcon />
                Start a Draw
              </a>
              <a href="#how-it-works" className={styles.btnSecondary}>
                See how it works →
              </a>
            </div>

            {/* App mockup */}
            <div className={styles.mockup}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>ghosty-raffle.vercel.app</div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  <span>Live</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <Image
                  src="/ghostyRaffle.png"
                  alt="GhostyRaffle app screenshot"
                  width={720}
                  height={460}
                  className={styles.screenshotImg}
                  priority
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────── */}
        <div className={styles.statsBar}>
          {[
            { num: '0',       label: 'Data Stored' },
            { num: '50',      label: 'Max Players' },
            { num: 'CSPRNG',  label: 'Crypto Shuffle' },
            { num: '1 CLICK', label: 'Secret Draw' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── How it works ───────────────────── */}
        <section id="how-it-works" className={styles.section}>
          <div className={styles.sectionLabel}>How It Works</div>
          <h2 className={styles.sectionTitle}>
            FOUR<br /><span className={styles.purple}>GHOSTLY</span> STEPS
          </h2>
          <p className={styles.sectionDesc}>
            No accounts, no databases, no logs. Add players, draw, and everyone gets a secret email. That&apos;s it.
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
            WHY <span className={styles.purple}>GHOSTY</span><br />RAFFLE?
          </h2>
          <p className={styles.sectionDesc}>
            Most gift exchange tools store your data and let the host peek. GhostyRaffle is built different.
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
        <section id="get-started" className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaGhost}>👻</div>
            <h2 className={styles.ctaTitle}>
              START YOUR<br /><span className={styles.purple}>SECRET</span> DRAW
            </h2>
            <p className={styles.ctaDesc}>
              No sign-ups. No data stored. Just add your crew, hit draw, and let the ghosts handle the rest.
            </p>
            <a
              href="https://ghosty-raffle.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <GhostIcon />
              Open GhostyRaffle
            </a>
          </div>
        </section>

      </div>

      <AppFooter />
    </>
  )
}

/* ── Sub-components ──────────────────────────────── */

function GhostIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C7.58 2 4 5.58 4 10v10.5c0 .83.67 1.5 1.5 1.5s1.04-.34 1.5-.85c.46.51 1.04.85 1.5.85s1.04-.34 1.5-.85c.46.51 1.04.85 1.5.85s1.04-.34 1.5-.85c.46.51 1.04.85 1.5.85s1.04-.34 1.5-.85c.46.51 1.04.85 1.5.85s1.5-.67 1.5-1.5V10c0-4.42-3.58-8-8-8zm-2 11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm4 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
    </svg>
  )
}

/* ── Static data ─────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: '👥',
    title: 'Add Participants',
    desc: 'Enter names and emails. Minimum 3, maximum 50 players. The more, the merrier.',
  },
  {
    num: '02',
    icon: '🎰',
    title: 'Hit Start Draw',
    desc: 'A cryptographically secure Fisher-Yates shuffle assigns each person a secret match.',
  },
  {
    num: '03',
    icon: '📧',
    title: 'Emails Sent',
    desc: 'Everyone receives a styled pixel-art email with their match. No one else sees it.',
  },
  {
    num: '04',
    icon: '👻',
    title: 'Data Vanishes',
    desc: 'Matches exist only in memory during execution. Nothing is saved — ever.',
  },
]

const features = [
  { icon: '🔒', title: 'Completely Private',       desc: 'Matches are never saved to any database or log. Not even the host can see the full list.' },
  { icon: '🎲', title: 'Cryptographically Secure',  desc: 'Uses Fisher-Yates shuffle with CSPRNG. The randomness is as strong as it gets.' },
  { icon: '👾', title: 'Retro 8-bit Aesthetic',     desc: 'Pixel art ghosts, Press Start 2P font, arcade animations. Gift exchange never looked this cool.' },
  { icon: '📧', title: 'Styled Email Delivery',     desc: 'Each participant gets a beautiful pixel-art email via Resend with their secret match.' },
  { icon: '🛡️', title: 'Rate Limited',              desc: 'Built-in protection against abuse. No one can spam the draw endpoint.' },
  { icon: '📱', title: 'Fully Responsive',          desc: 'Works on desktop and mobile. Organize your secret gift exchange from anywhere.' },
]
