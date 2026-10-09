import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Spectral, Manrope, JetBrains_Mono } from 'next/font/google'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

const APP_URL = 'https://deck-forge-eosin.vercel.app'

const spectral = Spectral({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-spectral',
  display: 'swap',
})

const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-manrope',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DeckForge — AI Deck Builder for Hearthstone',
  description:
    'Describe the deck you want to play and get a legal 30-card Standard deck with a code that pastes straight into Hearthstone. Live card data, deterministic validation, no database.',
  openGraph: {
    title: 'DeckForge — Describe the deck. We forge it.',
    description:
      'AI deck builder for Hearthstone. Legal 30-card Standard decks, one-click deck codes, explained card choices.',
    type: 'website',
  },
}

export default function DeckForgePage() {
  return (
    <>
      <AppNav />

      <div className={`${styles.page} ${spectral.variable} ${manrope.variable} ${jetbrains.variable}`}>
        <div className={styles.grain} aria-hidden="true" />

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroGlow} aria-hidden="true" />
          <div className={styles.ember1} aria-hidden="true" />
          <div className={styles.ember2} aria-hidden="true" />

          <div className={styles.heroInner}>
            <Link href="/" className={styles.backLink}>
              ← All Projects
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span>Web App · AI · Hearthstone</span>
            </div>

            <h1 className={styles.heroTitle}>
              Describe the deck.
              <br />
              <em className={styles.accent}>We forge it.</em>
            </h1>

            <p className={styles.heroSub}>
              Type what you want to play — <span className={styles.quote}>“Elemental Shaman around Al&apos;Akir”</span>,{' '}
              <span className={styles.quote}>“cheap aggro Hunter under 3000 dust”</span> — and get a legal 30-card
              Standard deck with a code that pastes straight into the game.
            </p>

            <div className={styles.heroActions}>
              <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
                Forge a deck
                <DiamondIcon />
              </a>
              <a href="#how-it-works" className={styles.btnSecondary}>
                See how the forge works →
              </a>
            </div>

            {/* App mockup */}
            <div className={styles.mockup}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>deck-forge-eosin.vercel.app</div>
                <div className={styles.liveBadge}>
                  <span className={styles.liveDot} />
                  <span>Live</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <Image
                  src="/deckforgeassets/result-hunter.png"
                  alt="DeckForge result: a Budget Face Hunter deck with mana curve, copy deck code button and the full card list"
                  width={1800}
                  height={1125}
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
            { num: '30/30',  label: 'Always legal' },
            { num: '1,200+', label: 'Standard cards' },
            { num: '11',     label: 'Classes' },
            { num: '0',      label: 'Databases' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── How it works ───────────────────── */}
        <section id="how-it-works" className={styles.section}>
          <div className={styles.sectionLabel}>How it works</div>
          <h2 className={styles.sectionTitle}>
            Five steps, <em className={styles.accent}>one sentence.</em>
          </h2>
          <p className={styles.sectionDesc}>
            The forge streams every step to the screen while it works. The model picks cards; the code decides
            whether they&apos;re allowed.
          </p>

          <div className={styles.forgeGrid}>
            <div className={styles.tracker}>
              <div className={styles.trackerHead}>
                <span className={styles.trackerTitle}>Forging your deck</span>
                <span className={styles.trackerTimer}>8.4s</span>
              </div>
              {steps.map((step, i) => (
                <div key={step.title} className={`${styles.step} ${i === 2 ? styles.stepActive : ''} ${i > 2 ? styles.stepPending : ''}`}>
                  <span className={`${styles.stepIcon} ${i < 2 ? styles.stepDone : ''} ${i === 2 ? styles.stepLive : ''}`}>
                    {i < 2 ? <CheckIcon /> : null}
                  </span>
                  <div className={styles.stepBody}>
                    <div className={styles.stepTitle}>{step.title}</div>
                    <div className={styles.stepDesc}>{step.desc}</div>
                  </div>
                  <span className={styles.stepMeta}>{step.meta}</span>
                </div>
              ))}
              <p className={styles.trackerNote}>
                Decks are validated before you see them. If the model slips, the list is repaired and re-checked.
              </p>
            </div>

            <div className={styles.forgeShot}>
              <Image
                src="/deckforgeassets/forging.png"
                alt="DeckForge forging screen with the live step tracker"
                width={1800}
                height={1125}
                className={styles.screenshotImg}
              />
            </div>
          </div>
        </section>

        {/* ── Features ───────────────────────── */}
        <section id="features" className={styles.featuresSection}>
          <div className={styles.sectionLabel}>Features</div>
          <h2 className={styles.sectionTitle}>
            Built like a <em className={styles.accent}>validator</em>, not a chatbot.
          </h2>
          <p className={styles.sectionDesc}>
            The LLM never sees a card it doesn&apos;t get the text for, and the UI never sees a deck the validator
            didn&apos;t pass.
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

        {/* ── Gallery ────────────────────────── */}
        <section className={styles.gallerySection}>
          <div className={styles.sectionLabel}>Screens</div>
          <h2 className={styles.sectionTitle}>
            Every deck <em className={styles.accent}>explains itself.</em>
          </h2>
          <p className={styles.sectionDesc}>
            Game plan, core synergies, mulligan tips and suggested swaps come with the list. Tweak it in a chat, or
            share it with a link that needs no database.
          </p>

          <div className={styles.galleryGrid}>
            <figure className={`${styles.shot} ${styles.shotWide}`}>
              <Image
                src="/deckforgeassets/why.png"
                alt="The 'Why these cards' panel explaining the game plan and core synergy of the deck"
                width={1800}
                height={1125}
                className={styles.screenshotImg}
              />
              <figcaption>Why these cards — game plan, synergies, mulligan</figcaption>
            </figure>
            <figure className={styles.shot}>
              <Image
                src="/deckforgeassets/result-shaman.png"
                alt="An Elemental Shaman deck with mana curve and verified-by-Blizzard badge"
                width={1800}
                height={1020}
                className={styles.screenshotImg}
              />
              <figcaption>Mana curve, dust cost, verified by Blizzard</figcaption>
            </figure>
            <figure className={styles.shot}>
              <Image
                src="/deckforgeassets/landing.png"
                alt="DeckForge landing page with the prompt box and class chips"
                width={1800}
                height={1125}
                className={styles.screenshotImg}
              />
              <figcaption>Prompt box, 11 class chips, example prompts</figcaption>
            </figure>
          </div>
        </section>

        {/* ── Stack ──────────────────────────── */}
        <section className={styles.stackSection}>
          <div className={styles.sectionLabel}>Under the hood</div>
          <div className={styles.stackRow}>
            {stack.map((s) => (
              <span key={s} className={styles.stackChip}>{s}</span>
            ))}
          </div>
          <p className={styles.stackNote}>
            Card data is synced from Blizzard&apos;s official Hearthstone Game Data API on every build. Only released
            Standard sets are used — the game rejects codes that contain unreleased cards. Decks are encoded with
            the open <code>deckstrings</code> format and verified against Blizzard&apos;s deck endpoint. Open source, MIT.
          </p>
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <div className={styles.ctaMark} aria-hidden="true">
              <span />
            </div>
            <h2 className={styles.ctaTitle}>
              Your next deck is <em className={styles.accent}>one sentence away.</em>
            </h2>
            <p className={styles.ctaDesc}>
              No sign-up. Type the deck, copy the code, open Hearthstone, create a new deck.
            </p>
            <a href={APP_URL} target="_blank" rel="noopener noreferrer" className={styles.btnPrimary}>
              Open DeckForge
              <DiamondIcon />
            </a>
            <p className={styles.disclaimer}>
              DeckForge is a fan project and is not affiliated with Blizzard Entertainment. Hearthstone is a
              trademark of Blizzard Entertainment, Inc.
            </p>
          </div>
        </section>
      </div>

      <AppFooter />
    </>
  )
}

/* ── Sub-components ──────────────────────────────── */

function DiamondIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden="true">
      <rect x="2.5" y="2.5" width="7" height="7" rx="1.2" transform="rotate(45 6 6)" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}

function Glyph({ d }: { d: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  )
}

/* ── Static data ─────────────────────────────────── */

const steps = [
  { title: 'Reading your request',    desc: 'Class, archetype, budget and seed cards are pulled out of the sentence.',               meta: 'Hunter · aggro' },
  { title: 'Searching Standard cards', desc: 'The class pool is filtered from the local cache — every card with its real text.',         meta: '344 candidates' },
  { title: 'Choosing synergies',       desc: 'The model picks 30 cards from the candidate pool and explains why.',                        meta: '' },
  { title: 'Validating deck',          desc: 'Size, copy limits, class legality, Death Knight runes. Errors go back for repair.',       meta: '' },
  { title: 'Encoding deck code',       desc: 'The list becomes a deckstring and is checked against Blizzard’s deck endpoint.',        meta: '' },
]

const features = [
  {
    icon: <Glyph d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />,
    title: 'Live card data',
    desc: 'Synced from Blizzard’s official API on every build. New expansions work the day they release — no retraining, no hand-written lists.',
  },
  {
    icon: <Glyph d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-4zM8.5 12l2.5 2.5 4.5-4.5" />,
    title: 'Legal & validated',
    desc: 'A deterministic validator checks every deck before you see it. If the model slips, it gets two repair rounds, then code finishes the job.',
  },
  {
    icon: <Glyph d="M8 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2zM16 7V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2" />,
    title: 'One-click deck code',
    desc: 'Copy once, open Hearthstone, create a new deck. The code is verified with Blizzard’s deck endpoint before it reaches your clipboard.',
  },
  {
    icon: <Glyph d="M4 5h16v11H8l-4 4V5zM8 9h8M8 12h5" />,
    title: 'Explains itself',
    desc: 'Game plan, core synergies, mulligan tips and suggested swaps come with every list, written against the real card text.',
  },
  {
    icon: <Glyph d="M4 4h16v12H9l-5 4V4zM20 12l-2 2M14 8l2 2M9 8h3" />,
    title: 'Refine in chat',
    desc: '“Make it cheaper”, “cut the legendaries”, “more removal”. Each edit shows a diff of what came in and out, and the dust delta.',
  },
  {
    icon: <Glyph d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1.5 1.5M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1.5-1.5" />,
    title: 'Share with a link',
    desc: 'The deck code is the URL. Share pages are rebuilt from the code and local card data — no database, nothing stored.',
  },
]

const stack = [
  'Next.js 16', 'TypeScript', 'Tailwind v4', 'Vercel AI SDK', 'Gemini Flash', 'Blizzard Game Data API',
  'deckstrings', 'Zod', 'Vitest', 'Playwright', 'Vercel',
]
