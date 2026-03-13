import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'InventQRy — QR-Powered Home Inventory App',
  description:
    'Organize every shelf and closet in your home with QR codes. Scan to find, add, or remove items instantly.',
  openGraph: {
    title: 'InventQRy',
    description: 'Your home, organized. One scan at a time.',
    type: 'website',
  },
}

export default function InventQRyPage() {
  return (
    <>
      <AppNav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} />
          <div className={styles.gridLines} aria-hidden="true" />

          <div className={styles.heroInner}>
            <Link href="/" className={styles.backLink}>
              ← All Projects
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgePulse} />
              <span>Mobile App · React Native · In Development</span>
            </div>

            <h1 className={styles.heroTitle}>
              Invent<span className={styles.blue}>QR</span>y
            </h1>

            <p className={styles.heroSub}>
              Your home, organized. One scan at a time.
              Stick a QR code on any shelf or closet — scan it to instantly see, add, or remove what&rsquo;s inside.
            </p>

            <div className={styles.heroActions}>
              <div className={styles.btnComingSoon}>
                <QrIcon />
                Coming Soon to App Stores
              </div>
              <a href="#how-it-works" className={styles.btnSecondary}>
                See how it works →
              </a>
            </div>

            {/* Phone mockup */}
            <div className={styles.phoneWrap}>
              <Image
                src="/inventqry-app.png"
                alt="InventQRy app screenshot"
                width={320}
                height={650}
                className={styles.phoneImg}
                priority
              />
              <div className={styles.phoneGlow} />
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────── */}
        <div className={styles.statsBar}>
          {[
            { num: 'QR',   label: 'Code Powered' },
            { num: '∞',    label: 'Shelves & Closets' },
            { num: '1',    label: 'Scan to Find Anything' },
            { num: 'iOS+', label: 'Android' },
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
            SCAN.<br /><span className={styles.blue}>FIND.</span> DONE.
          </h2>
          <p className={styles.sectionDesc}>
            No more opening every drawer or asking "where did I put that?" A QR code on every shelf, an answer in every scan.
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
            EVERY CORNER<br /><span className={styles.blue}>ACCOUNTED</span> FOR
          </h2>
          <p className={styles.sectionDesc}>
            Built for real homes. Not warehouses, not spreadsheets — just your bookshelf, pantry, and that closet you pretend doesn&rsquo;t exist.
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
            <div className={styles.ctaQrMark} aria-hidden="true">
              <QrBigIcon />
            </div>
            <h2 className={styles.ctaTitle}>
              ORGANIZE YOUR<br /><span className={styles.blue}>ENTIRE HOME</span>
            </h2>
            <p className={styles.ctaDesc}>
              InventQRy is in active development. Follow along on GitHub.
            </p>
            <a
              href="https://github.com/mihalidis/inventQRy"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <GithubIcon />
              Follow on GitHub
            </a>
          </div>
        </section>

      </div>

      <AppFooter />
    </>
  )
}

/* ── Icons ───────────────────────────────────────── */

function QrIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none" />
      <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

function QrBigIcon() {
  return (
    <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="5" y="5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="16" y="5" width="3" height="3" fill="currentColor" stroke="none" />
      <rect x="5" y="16" width="3" height="3" fill="currentColor" stroke="none" />
      <path d="M14 14h3v3h-3zM17 17h3v3h-3zM14 20h3" />
    </svg>
  )
}


/* ── Static data ─────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: '🏷️',
    title: 'Print & Stick',
    desc: 'Generate a QR code for any shelf, drawer, or closet. Print it and stick it on. Takes less than a minute.',
  },
  {
    num: '02',
    icon: '📱',
    title: 'Scan to Open',
    desc: 'Open InventQRy, point your camera at the QR code. Instantly see every item stored in that location.',
  },
  {
    num: '03',
    icon: '✅',
    title: 'Add or Remove',
    desc: 'Tap to add new items or mark them as removed. Your home inventory stays current, always.',
  },
]

const features = [
  { icon: '📷', title: 'QR Code Scanning',      desc: 'Each shelf gets its own unique QR code. One scan opens the full inventory of that exact location.' },
  { icon: '🏠', title: 'Location-Based Items',  desc: 'Items live in locations, not just lists. Find your drill by scanning the garage shelf, not by scrolling.' },
  { icon: '➕', title: 'Add & Remove Items',    desc: 'Quickly log new items when you store them, or mark them as taken when you grab them. Always accurate.' },
  { icon: '🔍', title: 'Global Search',         desc: 'Can\'t remember which shelf? Search by item name across your entire home and get the exact location.' },
  { icon: '📦', title: 'Shelf Management',      desc: 'Create named shelves for every space in your home — pantry, bookshelf, wardrobe, garage, anywhere.' },
  { icon: '📱', title: 'iOS & Android',         desc: 'Built with React Native. One codebase, both platforms. Your inventory follows you everywhere.' },
]
