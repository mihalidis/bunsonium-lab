import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Nunito, DM_Mono } from 'next/font/google'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

const nunito = Nunito({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-nunito',
  display: 'swap',
})

const dmMono = DM_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-dm-mono',
  display: 'swap',
})

const CHROME_WEB_STORE_URL = 'https://chromewebstore.google.com/detail/pixeltape-%E2%80%94-%C3%B6l%C3%A7-renk-se%C3%A7/fpcibdfbiahjjkoohceoddpimebjfcmb'
const GITHUB_URL = 'https://github.com/mihalidis/PixelTape'

export const metadata: Metadata = {
  title: 'PixelTape — Measure & Pick Colors on Any Webpage',
  description:
    'A minimal Chrome extension for frontend developers and QA testers. Ruler, color picker, and full-page outline mode — all one click away.',
  openGraph: {
    title: 'PixelTape — Measure. Pick. Debug. Instantly.',
    description:
      'Ruler, color picker, and outline mode for any webpage. Free Chrome extension.',
    type: 'website',
  },
}

export default function PixelTapePage() {
  return (
    <>
      <AppNav />

      <div className={`${styles.page} ${nunito.variable} ${dmMono.variable}`}>
        {/* ── Hero ─────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.blobA} />
          <div className={styles.blobB} />
          <div className={styles.blobC} />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Link href="/" className={styles.backLink}>
                ← All Projects
              </Link>

              <div className={styles.heroBadge}>
                <span className={styles.badgeDot} />
                <span>Chrome Extension · Free · Privacy-first</span>
              </div>

              <h1 className={styles.heroTitle}>
                Measure. Pick.<br />
                <span className={styles.gradientText}>Debug. Instantly.</span>
              </h1>

              <p className={styles.heroSub}>
                A minimal Chrome extension for frontend developers and QA
                testers. Ruler, color picker, and full-page outline mode —
                all one click away.
              </p>

              <div className={styles.heroActions}>
                <a
                  className={styles.btnPrimary}
                  href={CHROME_WEB_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ChromeIcon />
                  Add to Chrome — It&apos;s Free
                </a>
                <a
                  className={styles.btnGhost}
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon />
                  View on GitHub
                </a>
              </div>

              <p className={styles.trust}>
                <span>🔒 No data collected</span>
                <span className={styles.dot} />
                <span>100% private</span>
                <span className={styles.dot} />
                <span>Zero dependencies</span>
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.floatWrap}>
                <div className={styles.popupCard}>
                  <Image
                    src="/pikseltapeassets/popup-mockup.svg"
                    alt="PixelTape popup interface"
                    width={320}
                    height={520}
                    className={styles.popupImg}
                    priority
                  />
                </div>

                <div className={styles.hexBadge}>
                  <span className={styles.hexSwatch} />
                  <span className={styles.hexCode}>#B39DDB</span>
                </div>

                <div className={styles.rulerBubble}>
                  <span className={styles.rulerDim}>w: 240px</span>
                  <span className={styles.rulerX}>×</span>
                  <span className={styles.rulerDim}>h: 120px</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Three Features ─────────────────── */}
        <section id="features" className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionLabel}>Features</div>
            <h2 className={styles.sectionTitle}>Three tools. Zero friction.</h2>
          </div>

          <div className={styles.featureGrid}>
            {featureCards.map((f) => (
              <div
                key={f.title}
                className={`${styles.featureCard} ${styles[f.variant]}`}
              >
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <div className={styles.featureMini}>{f.mini}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── How it works ───────────────────── */}
        <section id="how" className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionLabel}>How it works</div>
            <h2 className={styles.sectionTitle}>
              From install to clipboard in three steps.
            </h2>
          </div>

          <div className={styles.stepsRow}>
            {steps.map((s, i) => (
              <div key={s.title} className={styles.stepWrap}>
                <div className={`${styles.stepCard} ${styles[s.variant]}`}>
                  <div className={styles.stepNum}>0{i + 1}</div>
                  <div className={styles.stepIcon}>{s.icon}</div>
                  <h3 className={styles.stepTitle}>{s.title}</h3>
                  <p className={styles.stepDesc}>{s.desc}</p>
                </div>
                {i < steps.length - 1 && (
                  <div className={styles.stepArrow} aria-hidden>
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* ── Showcase rows ──────────────────── */}
        <section className={styles.showcase}>
          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>📐 Ruler</div>
              <h3>Pixel-perfect measurements.</h3>
              <p>
                Click once to anchor, drag, click again to drop. A live
                <code className={styles.inlineCode}>w × h</code> tooltip
                follows your cursor while you drag.
                {/* , and the final dimensions copy to your clipboard as plain text. No fiddly modals, no extra clicks. */}
              </p>
              <ul className={styles.bulletList}>
                <li>Two-click flow, no modal</li>
                {/* <li>Auto-copy dimensions as plain text</li> */}
                <li>Works on any page, any layout</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFrameLavender}>
                <Image
                  src="/pikseltapeassets/app-screenshot-2.png"
                  alt="Outline mode applied to a webpage"
                  width={720}
                  height={440}
                  className={styles.shotImg}
                />
              </div>
            </div>
          </div>

          <div className={`${styles.showcaseRow} ${styles.reverse}`}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>🎨 Color Picker</div>
              <h3>Any color, any format.</h3>
              <p>
                Native <code className={styles.inlineCode}>EyeDropper</code>
                API means you get the real pixel — no canvas trickery.
                Output in HEX, RGB, HSL, or RGBA, and your preferred format
                copies instantly.
              </p>
              <ul className={styles.bulletList}>
                <li>Four output formats, one click</li>
                <li>Saved swatches history (up to 18)</li>
                <li>One-tap re-copy from the popup</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFramePink}>
                <Image
                  src="/pikseltapeassets/app-popup-screenshot-3.png"
                  alt="PixelTape popup showing saved swatches"
                  width={720}
                  height={440}
                  className={styles.shotImg}
                />
              </div>
            </div>
          </div>

          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>🔲 Outline Mode</div>
              <h3>See every box on the page.</h3>
              <p>
                Inspired by Pesticide. Drop a 1px outline on every element,
                color-coded by tag. Faster than the DevTools dance when
                you&apos;re chasing layout bugs.
              </p>
              <ul className={styles.bulletList}>
                <li>Tag-based color coding</li>
                <li>Toggle on/off from the popup</li>
                <li>No page reload, no CSS injection mess</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFrameMint}>
                <Image
                  src="/pikseltapeassets/app-screenshot-1.png"
                  alt="PixelTape ruler overlay measuring an element"
                  width={720}
                  height={440}
                  className={styles.shotImg}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy ────────────────────────── */}
        <section className={styles.privacy}>
          <div className={styles.privacyInner}>
            <div className={styles.sectionLabel}>Privacy</div>
            <h2 className={styles.privacyTitle}>
              Your data never leaves your browser.
            </h2>
            <div className={styles.privacyGrid}>
              {[
                { k: '✅', t: 'No analytics', d: 'Not even page views.' },
                { k: '✅', t: 'No telemetry', d: 'Nothing phones home.' },
                { k: '✅', t: 'No remote APIs', d: 'All work stays local.' },
              ].map((p) => (
                <div key={p.t} className={styles.privacyCard}>
                  <div className={styles.privacyCheck}>{p.k}</div>
                  <h4>{p.t}</h4>
                  <p>{p.d}</p>
                </div>
              ))}
            </div>
            <p className={styles.privacyNote}>
              Everything is stored in{' '}
              <code className={styles.inlineCode}>chrome.storage.local</code>.
              Source code is fully open and readable on{' '}
              <a
                href="https://github.com/mihalidis/PixelTape"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.inlineLink}
              >
                GitHub
              </a>
              .
            </p>
          </div>
        </section>

        {/* ── Spec strip ─────────────────────── */}
        <section className={styles.specStrip}>
          {[
            'Manifest V3',
            'Vanilla JS',
            'Zero dependencies',
            'Chrome 95+',
            'EyeDropper API',
            'MIT License',
          ].map((s) => (
            <span key={s} className={styles.specBadge}>
              {s}
            </span>
          ))}
        </section>

        {/* ── Final CTA ──────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <h2>Stop clicking around in DevTools.</h2>
            <p>Install PixelTape and get back to shipping.</p>
            <a
              className={styles.btnPrimaryLarge}
              href={CHROME_WEB_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ChromeIcon />
              Add to Chrome — It&apos;s Free
            </a>
          </div>
        </section>
      </div>

      <AppFooter />
    </>
  )
}

/* ── Icons ───────────────────────────────────── */

function ChromeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="4" />
      <line x1="21.17" y1="8" x2="12" y2="8" />
      <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
      <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
    </svg>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .3a12 12 0 0 0-3.8 23.4c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.6-1.4-1.4-1.8-1.4-1.8-1.1-.8.1-.8.1-.8 1.3.1 1.9 1.3 1.9 1.3 1.1 1.9 2.9 1.3 3.6 1 .1-.8.4-1.3.8-1.6-2.7-.3-5.5-1.3-5.5-6 0-1.3.5-2.4 1.2-3.2-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.4 11.4 0 0 1 6 0C17.3 4.7 18.3 5 18.3 5c.7 1.7.2 2.9.1 3.2.8.8 1.2 1.9 1.2 3.2 0 4.6-2.8 5.6-5.5 5.9.4.4.8 1.1.8 2.3v3.3c0 .3.2.7.8.6A12 12 0 0 0 12 .3" />
    </svg>
  )
}

/* ── Static data ─────────────────────────────── */

const RulerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="2" y="8" width="24" height="12" rx="3" stroke="#7C4DFF" strokeWidth="1.8"/>
    <line x1="7"  y1="8"  x2="7"  y2="13" stroke="#7C4DFF" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="11" y1="8"  x2="11" y2="12" stroke="#7C4DFF" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="15" y1="8"  x2="15" y2="13" stroke="#7C4DFF" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="19" y1="8"  x2="19" y2="12" stroke="#7C4DFF" strokeWidth="1.3" strokeLinecap="round"/>
    <line x1="23" y1="8"  x2="23" y2="13" stroke="#7C4DFF" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const ColorPickerIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="13" cy="13" r="9" stroke="#E91E8C" strokeWidth="1.8"/>
    <circle cx="9"  cy="10" r="2.5" fill="#FF80AB"/>
    <circle cx="14" cy="7"  r="2.5" fill="#F48FB1"/>
    <circle cx="18" cy="11" r="2.5" fill="#FCE4EC"/>
    <circle cx="17" cy="16" r="2.5" fill="#F06292"/>
    <circle cx="9"  cy="16" r="2"   fill="white"/>
    <line x1="19" y1="19" x2="25" y2="25" stroke="#E91E8C" strokeWidth="2" strokeLinecap="round"/>
    <line x1="23" y1="23" x2="26" y2="22" stroke="#E91E8C" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
)

const OutlineIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3"  y="3"  width="22" height="22" rx="3" stroke="#2E7D5E" strokeWidth="1.8"/>
    <rect x="7"  y="7"  width="8"  height="6"  rx="2" stroke="#2E7D5E" strokeWidth="1.4"/>
    <rect x="17" y="7"  width="7"  height="6"  rx="2" stroke="#2E7D5E" strokeWidth="1.4"/>
    <rect x="7"  y="16" width="17" height="5"  rx="2" stroke="#2E7D5E" strokeWidth="1.4"/>
  </svg>
)

const InstallIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="18" width="20" height="3" rx="1.5" fill="#7C4DFF" opacity="0.25"/>
    <rect x="4" y="20" width="20" height="2" rx="1" fill="#7C4DFF"/>
    <line x1="14" y1="4" x2="14" y2="17" stroke="#7C4DFF" strokeWidth="2" strokeLinecap="round"/>
    <polyline points="8,12 14,18 20,12" stroke="#7C4DFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const ClickIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M10 6 L10 18 L13.5 15 L15.5 21 L17.5 20.3 L15.5 14.3 L20 14.3 Z" stroke="#E91E8C" strokeWidth="1.7" strokeLinejoin="round" fill="none"/>
    <circle cx="6" cy="6" r="2" fill="#E91E8C" opacity="0.35"/>
    <circle cx="22" cy="6" r="2" fill="#E91E8C" opacity="0.35"/>
    <circle cx="6" cy="22" r="2" fill="#E91E8C" opacity="0.35"/>
  </svg>
)

const ClipboardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="6" y="7" width="16" height="18" rx="3" stroke="#2E7D5E" strokeWidth="1.8"/>
    <rect x="10" y="4" width="8" height="5" rx="2" stroke="#2E7D5E" strokeWidth="1.6" fill="white"/>
    <line x1="10" y1="14" x2="18" y2="14" stroke="#2E7D5E" strokeWidth="1.5" strokeLinecap="round"/>
    <line x1="10" y1="18" x2="15" y2="18" stroke="#2E7D5E" strokeWidth="1.5" strokeLinecap="round"/>
    <polyline points="15,20 17,22 21,18" stroke="#2E7D5E" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
  </svg>
)

const featureCards = [
  {
    icon: <RulerIcon />,
    title: 'Ruler',
    desc: 'Click twice to measure anything. Live w × h tooltip while you drag. Result lands in your clipboard automatically.',
    mini: '240 × 120 px',
    variant: 'lavender' as const,
  },
  {
    icon: <ColorPickerIcon />,
    title: 'Color Picker',
    desc: 'Native EyeDropper API. Get any pixel in HEX, RGB, HSL, or RGBA — your preferred format is copied instantly.',
    mini: '#B39DDB',
    variant: 'pink' as const,
  },
  {
    icon: <OutlineIcon />,
    title: 'Outline Mode',
    desc: 'Inspired by Pesticide. Drop a 1px outline on every element, color-coded by tag. Faster than any DevTools dance.',
    mini: '<div> <p> <span>',
    variant: 'mint' as const,
  },
]

const steps = [
  {
    icon: <InstallIcon />,
    title: 'Install',
    desc: 'Add PixelTape to Chrome in one click. No account, no setup.',
    variant: 'lavender' as const,
  },
  {
    icon: <ClickIcon />,
    title: 'Click a tool',
    desc: 'Ruler, Color Picker, or Outline — pick one from the popup.',
    variant: 'pink' as const,
  },
  {
    icon: <ClipboardIcon />,
    title: 'Get results',
    desc: 'Everything copies to your clipboard automatically. Done.',
    variant: 'mint' as const,
  },
]
