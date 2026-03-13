import type { Metadata } from 'next'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Happy Little Ipsum — Bob Ross-Inspired Lorem Ipsum Generator',
  description:
    'Generate placeholder text with Bob Ross quotes. Two modes: Paragraphs and Quotes. One-click copy.',
  openGraph: {
    title: 'Happy Little Ipsum',
    description: 'Boring placeholder text? Not in my happy little world.',
    type: 'website',
  },
}

export default function HappyLittleIpsumPage() {
  return (
    <>
      <AppNav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.scenery} aria-hidden="true">
            <div className={styles.skyGradient} />
            <div className={styles.cloud1} />
            <div className={styles.cloud2} />
            <div className={styles.cloud3} />
          </div>
          <div className={styles.heroGlow} />

          <div className={styles.heroInner}>
            <Link href="/" className={styles.backLink}>
              ← All Projects
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span>Web App · Bob Ross Inspired</span>
            </div>

            <h1 className={styles.heroTitle}>
              Happy<br />
              <span className={styles.green}>Little</span><br />
              <span className={styles.outline}>Ipsum</span>
            </h1>

            <p className={styles.heroSub}>
              Boring placeholder text? Not in my happy little world.
              Fill your designs with the warmth of Bob Ross quotes.
            </p>

            <div className={styles.heroActions}>
              <a
                href="https://happy-little-ipsum.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.btnPrimary}
              >
                <PaletteIcon />
                Start Generating
              </a>
              <a href="#how-it-works" className={styles.btnSecondary}>
                See how it works →
              </a>
            </div>

            {/* App mockup — matches real UI */}
            <div className={styles.mockup}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>happy-little-ipsum.vercel.app</div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  <span>Live</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <AppSim />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────── */}
        <div className={styles.statsBar}>
          {[
            { num: '50+',     label: 'Bob Ross Quotes' },
            { num: '2',       label: 'Generator Modes' },
            { num: '1 CLICK', label: 'Copy to Clipboard' },
            { num: '0',       label: 'Sign-ups Needed' },
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
            THREE<br /><span className={styles.green}>HAPPY</span> STEPS
          </h2>
          <p className={styles.sectionDesc}>
            No sign-up, no settings maze, no mistakes. Just happy little placeholder text, instantly.
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
            WHY <span className={styles.green}>THIS</span><br />IPSUM?
          </h2>
          <p className={styles.sectionDesc}>
            Lorem ipsum is boring. Bob Ross never was. Why settle for latin when you can have joy?
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

        {/* ── Demo Preview ───────────────────── */}
        <section id="demo" className={styles.demoSection}>
          <div className={styles.sectionLabel}>Preview</div>
          <h2 className={styles.sectionTitle}>
            A HAPPY<br /><span className={styles.green}>LITTLE</span> SAMPLE
          </h2>
          <p className={styles.sectionDesc}>
            This is what your placeholder text looks like. Warm, human, and full of joy.
          </p>

          <DemoCard />
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section id="get-started" className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              PAINT YOUR<br /><span className={styles.green}>HAPPY</span> WORLD
            </h2>
            <p className={styles.ctaDesc}>
              Stop settling for lorem ipsum. Your mockups deserve the wisdom of Bob Ross.
            </p>
            <a
              href="https://happy-little-ipsum.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.btnPrimary}
            >
              <PaletteIcon />
              Open Happy Little Ipsum
            </a>
          </div>
        </section>

      </div>

      <AppFooter />
    </>
  )
}

/* ── Sub-components ──────────────────────────────── */

function PaletteIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r=".5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r=".5" fill="currentColor" />
      <circle cx="8.5"  cy="7.5"  r=".5" fill="currentColor" />
      <circle cx="6.5"  cy="12.5" r=".5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  )
}

/* Faithful reproduction of the actual app UI */
function AppSim() {
  return (
    <div className={styles.appSim}>
      {/* Sky + tree background inside the mockup */}
      <div className={styles.appBg}>
        <div className={styles.appSky} />
        <div className={styles.appMountains} />
        <div className={styles.appTrees} />
      </div>

      <div className={styles.appContent}>
        {/* Badge */}
        <div className={styles.appBadge}>BOB ROSS LOREM IPSUM</div>

        {/* Title */}
        <div className={styles.appTitle}>Happy Little Ipsum</div>

        {/* Controls row */}
        <div className={styles.controls}>
          <div className={styles.modeToggle}>
            <button className={`${styles.modeBtn} ${styles.modeBtnActive}`}>Paragraphs</button>
            <button className={styles.modeBtn}>Quotes</button>
          </div>
          <div className={styles.counter}>
            <button className={styles.counterBtn}>−</button>
            <span className={styles.counterVal}>3</span>
            <button className={styles.counterBtn}>+</button>
          </div>
          <button className={styles.generateBtn}>Regenerate</button>
        </div>

        {/* Output label + copy all */}
        <div className={styles.outputHeader}>
          <span className={styles.outputLabel}>3 PARAGRAPHS</span>
          <button className={styles.copyAllBtn}>Copy All</button>
        </div>

        {/* Output cards */}
        <div className={styles.outputCard}>
          <p className={styles.outputText}>
            Let&rsquo;s build a happy little cloud. Let&rsquo;s build some happy little trees. Let&rsquo;s make some happy little clouds that just float around and have a good time.
          </p>
          <button className={styles.copyBtn}>Copy</button>
        </div>

        <div className={styles.outputCard}>
          <p className={styles.outputText}>
            All you need to paint is a few tools, a little instruction, and a vision in your mind. We don&rsquo;t make mistakes, just happy little accidents.
          </p>
          <button className={styles.copyBtn}>Copy</button>
        </div>
      </div>
    </div>
  )
}

function DemoCard() {
  return (
    <div className={styles.demoCard}>
      <div className={styles.demoQuoteMark}>&ldquo;</div>
      <blockquote className={styles.demoQuote}>
        We don&rsquo;t make mistakes, just happy little accidents. Every day is a good day when you paint.
        In your world you have total and absolute freedom. You can paint happy little trees, rolling mountains,
        and skies that go on forever. Just let go and believe that you can do it.
      </blockquote>
      <div className={styles.demoAttrib}>— Bob Ross, as adapted by Happy Little Ipsum</div>
      <a
        href="https://happy-little-ipsum.vercel.app"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.btnPrimary}
      >
        Generate Your Own →
      </a>
    </div>
  )
}

/* ── Static data ─────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: '🎨',
    title: 'Choose Your Mode',
    desc: 'Pick Paragraphs for blocks of text or Quotes for individual Bob Ross wisdom. Both are equally delightful.',
  },
  {
    num: '02',
    icon: '🌲',
    title: 'Set the Amount',
    desc: 'Decide how many paragraphs or quotes you need. One happy little sentence or a whole forest of words.',
  },
  {
    num: '03',
    icon: '📋',
    title: 'Copy & Paste',
    desc: 'Hit generate, click copy. Your Bob Ross placeholder text is ready to fill any design, mockup, or prototype.',
  },
]

const features = [
  { icon: '✍️', title: 'Real Bob Ross Quotes',  desc: 'Every line is drawn from real Bob Ross quotes. Your placeholders will have more soul than most final copy.' },
  { icon: '📝', title: 'Paragraph Mode',         desc: 'Combine multiple quotes into flowing paragraphs. Perfect for filling long content areas in designs and mockups.' },
  { icon: '💬', title: 'Quote Mode',             desc: 'Get individual, standalone quotes. Great for testimonial placeholders, pull quotes, or hero copy blocks.' },
  { icon: '📋', title: 'One-Click Copy',         desc: 'Copy each card individually or grab everything at once with Copy All. No selecting, no dragging.' },
  { icon: '🖼️', title: 'Beautiful UI',           desc: 'The generator itself looks great. Sky, mountains, pine trees — Bob Ross would approve of the scenery.' },
  { icon: '📱', title: 'Works Everywhere',       desc: 'Fully responsive. Use it on your phone, tablet, or desktop. Happy accidents are not limited by screen size.' },
]
