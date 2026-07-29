import type { Metadata } from 'next'
import Link from 'next/link'
import { Plus_Jakarta_Sans, JetBrains_Mono } from 'next/font/google'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import styles from './page.module.css'

const CONTACT_URL = 'https://www.linkedin.com/in/pinarsuvacoglu/'

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'DynamiQR — Dinamik QR Kod Yönetimi',
  description:
    'Kendi sunucunuzda çalışan dinamik QR kod yönetim sistemi. Basılan QR asla değişmez — sadece yönlendirdiği hedef URL değişir. Scan tracking, analytics, çok kullanıcılı panel.',
  openGraph: {
    title: 'DynamiQR — QR kodun sabit, hedefi senin kontrolünde.',
    description:
      'Self-hosted dinamik QR yönetimi: yönlendirme, tarama takibi ve analytics. Türkçe arayüz, dark mode.',
    type: 'website',
  },
}

export default function DynamiQrPage() {
  return (
    <>
      <AppNav />

      <div className={`${styles.page} ${jakarta.variable} ${jetbrains.variable}`}>
        {/* ── Hero ─────────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} />
          <div className={styles.grid} />
          <div className={styles.glowA} />
          <div className={styles.glowB} />

          <div className={styles.heroInner}>
            <div className={styles.heroCopy}>
              <Link href="/" className={styles.backLink}>
                ← Tüm Projeler
              </Link>

              <div className={styles.heroBadge}>
                <span className={styles.badgeDot} />
                <span>Self-hosted · Çok kullanıcılı · Türkçe arayüz</span>
              </div>

              <h1 className={styles.heroTitle}>
                QR kodun sabit.
                <br />
                <span className={styles.gradientText}>Hedefi senin kontrolünde.</span>
              </h1>

              <p className={styles.heroSub}>
                Bir kez bastır, bir daha dokunma. DynamiQR&apos;da QR kodun asla
                değişmez — sadece yönlendirdiği adresi değiştirirsin. Menü,
                kampanya, katalog, etkinlik… hepsi tek panelden.
              </p>

              <div className={styles.heroActions}>
                <a
                  className={styles.btnPrimary}
                  href={CONTACT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon />
                  Bilgi al
                </a>
                <a className={styles.btnGhost} href="#nasil-calisir">
                  Nasıl çalışıyor?
                  <span className={styles.btnArrow}>↓</span>
                </a>
              </div>

              <p className={styles.trust}>
                <span>🔒 Ham IP saklanmaz</span>
                <span className={styles.dot} />
                <span>Kendi sunucun, kendi verin</span>
                <span className={styles.dot} />
                <span>Bot filtreli sayım</span>
              </p>
            </div>

            <div className={styles.heroVisual}>
              <div className={styles.floatWrap}>
                <DashboardMock />
              </div>

              <div className={styles.qrFloat}>
                <QrGlyph size={92} />
                <span className={styles.qrFloatLabel}>/menu</span>
              </div>

              <div className={styles.pingBubble}>
                <span className={styles.pingDot} />
                <span>302 · 41ms</span>
              </div>
            </div>
          </div>
        </section>

        {/* ── Concept ──────────────────────────── */}
        <section id="nasil-calisir" className={styles.concept}>
          <div className={styles.conceptInner}>
            <div className={styles.sectionHead}>
              <div className={styles.sectionLabel}>Fikir</div>
              <h2 className={styles.sectionTitle}>Tek QR, sonsuz hedef.</h2>
              <p className={styles.sectionDesc}>
                Statik bir QR kodun hedefi kodun içine gömülüdür — değiştirmek
                için yeniden basmak gerekir. DynamiQR araya kalıcı bir kısa link
                koyar; hedefi panelden istediğin zaman değiştirirsin.
              </p>
            </div>

            <div className={styles.flow}>
              <div className={styles.flowStep}>
                <div className={styles.flowCard}>
                  <QrGlyph size={104} />
                </div>
                <div className={styles.flowMeta}>
                  <span className={`${styles.flowTag} ${styles.tagFixed}`}>
                    Değişmez
                  </span>
                  <span className={styles.flowCaption}>Basılan QR kod</span>
                </div>
              </div>

              <div className={styles.flowArrow} aria-hidden>
                →
              </div>

              <div className={styles.flowStep}>
                <div className={`${styles.flowCard} ${styles.flowCardLink}`}>
                  <span className={styles.linkHost}>qr.domain.com</span>
                  <span className={styles.linkPath}>/menu</span>
                  <span className={styles.linkNote}>302 yönlendirme</span>
                </div>
                <div className={styles.flowMeta}>
                  <span className={`${styles.flowTag} ${styles.tagFixed}`}>
                    Değişmez
                  </span>
                  <span className={styles.flowCaption}>Kalıcı kısa link</span>
                </div>
              </div>

              <div className={styles.flowArrow} aria-hidden>
                →
              </div>

              <div className={styles.flowStep}>
                <div className={`${styles.flowCard} ${styles.flowCardTargets}`}>
                  <div className={styles.targetRow}>
                    <span className={styles.targetWhen}>bugün</span>
                    <code className={styles.targetUrl}>restaurant.com/menu</code>
                  </div>
                  <div className={`${styles.targetRow} ${styles.targetRowNext}`}>
                    <span className={styles.targetWhen}>yarın</span>
                    <code className={styles.targetUrl}>
                      restaurant.com/new-menu
                    </code>
                  </div>
                </div>
                <div className={styles.flowMeta}>
                  <span className={`${styles.flowTag} ${styles.tagDynamic}`}>
                    Sen değiştirirsin
                  </span>
                  <span className={styles.flowCaption}>Hedef URL</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Features ─────────────────────────── */}
        <section id="ozellikler" className={styles.section}>
          <div className={styles.sectionHead}>
            <div className={styles.sectionLabel}>Özellikler</div>
            <h2 className={styles.sectionTitle}>
              Bir QR panelinden beklediğin her şey.
            </h2>
          </div>

          <div className={styles.featureGrid}>
            {features.map((f) => (
              <div key={f.title} className={styles.featureCard}>
                <div className={styles.featureIcon}>{f.icon}</div>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureDesc}>{f.desc}</p>
                <div className={styles.featureMini}>{f.mini}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Showcase ─────────────────────────── */}
        <section className={styles.showcase}>
          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>📊 Dashboard</div>
              <h3>Her şey ilk ekranda.</h3>
              <p>
                Toplam ve aktif QR sayısı, tüm zamanların tarama toplamı, bugünün
                taramaları ve düne göre değişim. Altında son 30 günün günlük
                tarama grafiği.
              </p>
              <ul className={styles.bulletList}>
                <li>Dünle karşılaştırmalı günlük sayaç</li>
                <li>Son 30 günün trend grafiği</li>
                <li>Tek tıkla detaylı analytics&apos;e geçiş</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFrame}>
                <DashboardMock />
              </div>
            </div>
          </div>

          <div className={`${styles.showcaseRow} ${styles.reverse}`}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>🔗 QR Yönetimi</div>
              <h3>Hedefi değiştir, kod aynı kalsın.</h3>
              <p>
                QR&apos;ı oluştur, PNG veya SVG olarak indir, bastır. Sonrasında
                hedef URL&apos;i dilediğin zaman güncelle. İşi biten kodu silmek
                yerine pasifleştir.
              </p>
              <ul className={styles.bulletList}>
                <li>PNG / SVG indirme</li>
                <li>Son geçerlilik tarihi ve şifre koruması</li>
                <li>İsim, kod veya URL ile arama + durum filtresi</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFrame}>
                <TableMock />
              </div>
            </div>
          </div>

          <div className={styles.showcaseRow}>
            <div className={styles.showcaseCopy}>
              <div className={styles.tagPill}>📈 Analytics</div>
              <h3>Kim, nereden, hangi cihazla?</h3>
              <p>
                Her tarama kaydedilir: ülke ve şehir, tarayıcı, cihaz, işletim
                sistemi ve referer. Günlük, haftalık veya aylık kırılımda
                incele.
              </p>
              <ul className={styles.bulletList}>
                <li>Günlük / haftalık / aylık grafikler</li>
                <li>En çok taranan QR&apos;lar sıralaması</li>
                <li>Cihaz, tarayıcı ve ülke dağılımları</li>
              </ul>
            </div>
            <div className={styles.showcaseVisual}>
              <div className={styles.shotFrame}>
                <AnalyticsMock />
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy ──────────────────────────── */}
        <section className={styles.privacy}>
          <div className={styles.privacyInner}>
            <div className={`${styles.sectionLabel} ${styles.labelOnDark}`}>
              Gizlilik
            </div>
            <h2 className={styles.privacyTitle}>
              Tarama verisi ölçmek için, izlemek için değil.
            </h2>

            <div className={styles.privacyGrid}>
              {privacyCards.map((p) => (
                <div key={p.title} className={styles.privacyCard}>
                  <div className={styles.privacyCheck}>{p.icon}</div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
              ))}
            </div>

            <p className={styles.privacyNote}>
              Sistem tamamen senin sunucunda çalışır. Üçüncü bir taraf yok,
              satılan veri yok — veritabanı senin.
            </p>
          </div>
        </section>

        {/* ── Setup ────────────────────────────── */}
        <section className={styles.setup}>
          <div className={styles.setupInner}>
            <div className={styles.setupCopy}>
              <div className={styles.sectionLabel}>Kurulum</div>
              <h2 className={styles.setupTitle}>Dört komut, bir panel.</h2>
              <p className={styles.setupDesc}>
                Vercel + Neon ile ücretsiz katmanda çalışır. İlk hesabı
                oluşturduktan sonra ekibine <strong>tek kullanımlık davet
                kodu</strong> üretirsin — kayıt davetsiz açılmaz, herkes kendi
                panelinin adminidir.
              </p>

              <div className={styles.setupSteps}>
                {setupSteps.map((s, i) => (
                  <div key={s} className={styles.setupStep}>
                    <span className={styles.setupNum}>{`0${i + 1}`}</span>
                    <span>{s}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.terminal}>
              <div className={styles.terminalBar}>
                <span className={styles.tDot} />
                <span className={styles.tDot} />
                <span className={styles.tDot} />
                <span className={styles.terminalName}>dynamiqr — zsh</span>
              </div>
              <pre className={styles.terminalBody}>
                <code>
                  {commandLines.map((line) => (
                    <span key={line.cmd} className={styles.termLine}>
                      <span className={styles.termPrompt}>$</span>
                      <span className={styles.termCmd}>{line.cmd}</span>
                      {line.note && (
                        <span className={styles.termNote}># {line.note}</span>
                      )}
                    </span>
                  ))}
                </code>
              </pre>
            </div>
          </div>
        </section>

        {/* ── Spec strip ───────────────────────── */}
        <section className={styles.specStrip}>
          {stack.map((s) => (
            <span key={s} className={styles.specBadge}>
              {s}
            </span>
          ))}
        </section>

        {/* ── Final CTA ────────────────────────── */}
        <section className={styles.finalCta}>
          <div className={styles.finalCtaInner}>
            <div className={styles.ctaBadge}>
              <span className={styles.badgeDot} />
              Yayında
            </div>
            <h2>Kodu bir kez bastır, gerisini panelden yönet.</h2>
            <p>
              DynamiQR self-hosted çalışan bir sistem. Kurulum, ekip kullanımı
              veya kendi domain&apos;inde konumlandırma için iletişime geç —
              detayları birlikte konuşalım.
            </p>
            <a
              className={styles.btnPrimaryLarge}
              href={CONTACT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
              Bilgi almak için iletişime geç
            </a>
            <p className={styles.ctaNote}>
              LinkedIn üzerinden yanıtlıyorum. Diğer projeler için{' '}
              <Link href="/#projeler" className={styles.inlineLink}>
                buraya
              </Link>{' '}
              göz atabilirsin.
            </p>
          </div>
        </section>
      </div>

      <AppFooter />
    </>
  )
}

/* ── QR glyph ────────────────────────────────── */
/* Görsel amaçlı; gerçek bir QR değil — sabit seed'le üretilen deterministik desen. */

function QrGlyph({ size = 120 }: { size?: number }) {
  const N = 21
  const isFinder = (r: number, c: number) =>
    (r < 8 && c < 8) || (r < 8 && c >= N - 8) || (r >= N - 8 && c < 8)

  let seed = 0x2f6e2b1
  const cells: { r: number; c: number }[] = []
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      seed = (seed * 1103515245 + 12345) & 0x7fffffff
      if (!isFinder(r, c) && (seed >> 16) % 100 < 47) cells.push({ r, c })
    }
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${N} ${N}`}
      role="img"
      aria-label="QR kod"
      shapeRendering="crispEdges"
    >
      <rect width={N} height={N} fill="#ffffff" />
      {cells.map(({ r, c }) => (
        <rect key={`${r}-${c}`} x={c} y={r} width="1" height="1" fill="#0f172a" />
      ))}
      {[
        [0, 0],
        [0, N - 7],
        [N - 7, 0],
      ].map(([r, c]) => (
        <g key={`f-${r}-${c}`}>
          <rect x={c} y={r} width="7" height="7" fill="#0f172a" />
          <rect x={c + 1} y={r + 1} width="5" height="5" fill="#ffffff" />
          <rect x={c + 2} y={r + 2} width="3" height="3" fill="#4f46e5" />
        </g>
      ))}
    </svg>
  )
}

/* ── App mockups ─────────────────────────────── */

function AppChrome({ page, children }: { page: string; children: React.ReactNode }) {
  return (
    <div className={styles.app}>
      <aside className={styles.appSide}>
        <div className={styles.appBrand}>
          <span className={styles.appLogo}>
            <MiniQrIcon />
          </span>
          <span className={styles.appBrandText}>
            <strong>DynamiQR</strong>
            <em>QR Yönetimi</em>
          </span>
        </div>
        <div className={styles.appNavLabel}>Yönetim</div>
        {['Dashboard', 'QR Kodlar', 'Analytics', 'Ayarlar'].map((item) => (
          <div
            key={item}
            className={`${styles.appNavItem} ${item === page ? styles.appNavActive : ''}`}
          >
            <span className={styles.appNavDot} />
            {item}
          </div>
        ))}
      </aside>

      <div className={styles.appMain}>
        <div className={styles.appTopbar}>
          <span className={styles.appCrumb}>{page}</span>
          <span className={styles.appTheme}>☀</span>
        </div>
        <div className={styles.appBody}>{children}</div>
      </div>
    </div>
  )
}

function DashboardMock() {
  return (
    <AppChrome page="Dashboard">
      <div className={styles.appHead}>
        <div>
          <h4>Dashboard</h4>
          <p>QR kodlarınızın genel görünümü</p>
        </div>
        <span className={styles.appBtn}>+ Yeni QR</span>
      </div>

      <div className={styles.statRow}>
        {[
          { label: 'Toplam QR', value: '12' },
          { label: 'Aktif QR', value: '9' },
          { label: 'Toplam Tarama', value: '2.418' },
          { label: 'Bugünkü Tarama', value: '64', delta: '+%18 · dün 54' },
        ].map((s) => (
          <div key={s.label} className={styles.statCard}>
            <span className={styles.statLabel}>{s.label}</span>
            <span className={styles.statValue}>{s.value}</span>
            {s.delta && <span className={styles.statDelta}>↗ {s.delta}</span>}
          </div>
        ))}
      </div>

      <div className={styles.chartCard}>
        <div className={styles.chartHead}>
          <span className={styles.chartTitle}>Taramalar</span>
          <span className={styles.chartLink}>Analytics →</span>
        </div>
        <svg
          className={styles.chartSvg}
          viewBox="0 0 600 150"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="dqArea" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.28" />
              <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[30, 65, 100, 135].map((y) => (
            <line
              key={y}
              x1="0"
              y1={y}
              x2="600"
              y2={y}
              stroke="#e2e8f0"
              strokeWidth="1"
              strokeDasharray="4 6"
            />
          ))}
          <path
            d={`${AREA_PATH} L600,150 L0,150 Z`}
            fill="url(#dqArea)"
          />
          <path
            d={AREA_PATH}
            fill="none"
            stroke="#6366f1"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </AppChrome>
  )
}

function TableMock() {
  return (
    <AppChrome page="QR Kodlar">
      <div className={styles.appHead}>
        <div>
          <h4>QR Kodlar</h4>
          <p>Hedef URL&apos;yi dilediğiniz zaman değiştirebilirsiniz.</p>
        </div>
        <span className={styles.appBtn}>+ Yeni QR</span>
      </div>

      <div className={styles.filterRow}>
        <span className={styles.searchBox}>İsim, kod veya URL ara…</span>
        <span className={styles.selectBox}>Durum: Tümü ⌄</span>
      </div>

      <div className={styles.table}>
        <div className={`${styles.tableRow} ${styles.tableHeadRow}`}>
          <span>İsim</span>
          <span>Hedef URL</span>
          <span>Durum</span>
          <span className={styles.alignRight}>Tarama</span>
        </div>
        {tableRows.map((row) => (
          <div key={row.code} className={styles.tableRow}>
            <span className={styles.cellName}>
              <span className={styles.cellIcon}>
                <MiniQrIcon />
              </span>
              <span>
                <strong>{row.name}</strong>
                <em>/{row.code}</em>
              </span>
            </span>
            <span className={styles.cellUrl}>
              <strong>{row.host}</strong>
              {row.path}
            </span>
            <span>
              <span
                className={`${styles.pill} ${row.active ? styles.pillActive : styles.pillIdle}`}
              >
                <span className={styles.pillDot} />
                {row.active ? 'Aktif' : 'Pasif'}
              </span>
            </span>
            <span className={`${styles.cellScans} ${styles.alignRight}`}>
              {row.scans}
            </span>
          </div>
        ))}
      </div>

      <div className={styles.tableFoot}>
        <span>
          <strong>4</strong> kayıt
        </span>
        <span>Sayfa 1 / 1</span>
      </div>
    </AppChrome>
  )
}

function AnalyticsMock() {
  return (
    <AppChrome page="Analytics">
      <div className={styles.appHead}>
        <div>
          <h4>Analytics</h4>
          <p>Tarama istatistikleri ve dağılımlar</p>
        </div>
        <span className={styles.segmented}>
          <span className={styles.segActive}>Günlük</span>
          <span>Haftalık</span>
          <span>Aylık</span>
        </span>
      </div>

      <div className={styles.chartCard}>
        <div className={styles.chartHead}>
          <span className={styles.chartTitle}>Taramalar</span>
          <span className={styles.chartSub}>Son 30 gün</span>
        </div>
        <div className={styles.bars}>
          {barHeights.map((h, i) => (
            <span
              key={i}
              className={styles.bar}
              style={{ height: `${Math.max(h, 4)}%` }}
            />
          ))}
        </div>
      </div>

      <div className={styles.splitRow}>
        <div className={styles.panel}>
          <span className={styles.panelTitle}>En Çok Taranan QR&apos;lar</span>
          {topQrs.map((q, i) => (
            <div key={q.name} className={styles.rankRow}>
              <span className={styles.rankNum}>{i + 1}</span>
              <span className={styles.rankName}>{q.name}</span>
              <span className={styles.rankBarWrap}>
                <span className={styles.rankBar} style={{ width: `${q.pct}%` }} />
              </span>
              <span className={styles.rankVal}>%{q.pct}</span>
            </div>
          ))}
        </div>

        <div className={styles.panel}>
          <span className={styles.panelTitle}>Dağılımlar</span>
          <span className={styles.panelLabel}>Cihaz</span>
          {devices.map((d) => (
            <div key={d.name} className={styles.rankRow}>
              <span className={styles.rankName}>{d.name}</span>
              <span className={styles.rankBarWrap}>
                <span className={styles.rankBar} style={{ width: `${d.pct}%` }} />
              </span>
              <span className={styles.rankVal}>%{d.pct}</span>
            </div>
          ))}
        </div>
      </div>
    </AppChrome>
  )
}

function LinkedInIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05a3.74 3.74 0 0 1 3.37-1.85c3.6 0 4.27 2.37 4.27 5.46zM5.34 7.43a2.07 2.07 0 1 1 0-4.13 2.07 2.07 0 0 1 0 4.13m1.78 13.02H3.55V9h3.57zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0" />
    </svg>
  )
}

function MiniQrIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor" aria-hidden>
      <rect x="0" y="0" width="5" height="5" rx="1" />
      <rect x="7" y="0" width="5" height="5" rx="1" />
      <rect x="0" y="7" width="5" height="5" rx="1" />
      <rect x="7" y="7" width="2" height="2" rx="0.5" />
      <rect x="10" y="10" width="2" height="2" rx="0.5" />
    </svg>
  )
}

/* ── Static data ─────────────────────────────── */

const AREA_PATH =
  'M0,132 L300,132 C318,132 322,26 340,26 C358,26 362,132 380,132 L430,132 C448,132 452,58 470,58 C488,58 492,132 510,132 L600,132'

const barHeights = [
  6, 4, 10, 4, 4, 18, 4, 4, 8, 4, 26, 4, 4, 12, 4, 34, 4, 8, 4, 4, 48, 4, 22, 4,
  4, 62, 4, 4, 88, 40,
]

const tableRows = [
  { name: 'Menü', code: 'menu', host: 'restaurant.com', path: '/menu-2026', active: true, scans: '1.204' },
  { name: 'Kampanya', code: 'kmpn', host: 'restaurant.com', path: '/yaz-kampanya', active: true, scans: '642' },
  { name: 'Katalog', code: 'ktlg', host: 'drive.google.com', path: '/file/d/1a2…', active: true, scans: '389' },
  { name: 'Etkinlik', code: 'evnt', host: 'eventbrite.com', path: '/e/lansman', active: false, scans: '183' },
]

const topQrs = [
  { name: 'Menü', pct: 100 },
  { name: 'Kampanya', pct: 53 },
  { name: 'Katalog', pct: 32 },
]

const devices = [
  { name: 'Mobil', pct: 87 },
  { name: 'Masaüstü', pct: 11 },
  { name: 'Tablet', pct: 2 },
]

const features = [
  {
    icon: '🔁',
    title: 'Dinamik yönlendirme',
    desc: 'Kısa link kalıcı, hedef değişken. Yönlendirme tipini 302 (varsayılan) veya 301 olarak ayarlardan seçersin.',
    mini: '302 Found · 301 Moved',
  },
  {
    icon: '🧩',
    title: 'QR yönetimi',
    desc: 'Oluştur, düzenle, pasifleştir. Son geçerlilik tarihi ve şifre koruması ekle, PNG ya da SVG olarak indir.',
    mini: 'PNG · SVG · pasifleştir',
  },
  {
    icon: '🛰️',
    title: 'Scan tracking',
    desc: 'Ülke ve şehir, tarayıcı, cihaz, işletim sistemi ve referer. Botlar filtrelenir, tekrar eden istekler sayılmaz.',
    mini: 'ülke · cihaz · referer',
  },
  {
    icon: '📈',
    title: 'Analytics',
    desc: 'Günlük, haftalık ve aylık grafikler; en çok taranan QR sıralaması; cihaz, tarayıcı ve ülke dağılımları.',
    mini: 'günlük / haftalık / aylık',
  },
  {
    icon: '👥',
    title: 'Davet kodlu ekip',
    desc: 'Better Auth ile e-posta + şifre girişi. Kayıt yalnızca tek kullanımlık davet koduyla; herkes kendi panelinin adminidir.',
    mini: 'tek kullanımlık davet',
  },
  {
    icon: '🌓',
    title: 'Dark mode & Türkçe',
    desc: 'Baştan sona Türkçe arayüz, koyu tema desteği ve mobilden masaüstüne responsive tasarım.',
    mini: 'responsive · TR',
  },
]

const privacyCards = [
  {
    icon: '🕵️',
    title: 'Ham IP saklanmaz',
    desc: 'IP adresi günlük rotasyonlu bir hash ile anonimleştirilir; orijinali hiçbir yere yazılmaz.',
  },
  {
    icon: '🤖',
    title: 'Bot filtresi',
    desc: 'Tarayıcı botları ve link önizleyicileri sayıma dahil edilmez. Tekrar eden istekler de tek sayılır.',
  },
  {
    icon: '🏠',
    title: 'Kendi sunucunda',
    desc: 'Self-hosted. Veritabanı senin, panel senin — hiçbir veri dışarı çıkmaz.',
  },
]

const setupSteps = [
  'Repo’yu Vercel’e import et, Neon’dan bir PostgreSQL aç.',
  'Ortam değişkenlerini gir: DATABASE_URL, DIRECT_URL, BETTER_AUTH_SECRET.',
  'İlk hesabı /register üzerinden oluştur — boş veritabanında davet kodu istenmez.',
  'Ayarlar → Davetler’den ekibin için kod üret.',
]

const commandLines = [
  { cmd: 'pnpm install', note: '' },
  { cmd: 'cp .env.example .env', note: 'değerleri doldur' },
  { cmd: 'pnpm db:migrate', note: 'şemayı uygula' },
  { cmd: 'pnpm dev', note: 'localhost:3000' },
]

const stack = [
  'Next.js 16',
  'React 19',
  'TypeScript',
  'Tailwind CSS v4',
  'shadcn/ui',
  'Prisma 7',
  'Neon PostgreSQL',
  'Better Auth',
  'TanStack Table',
  'Recharts',
  'Vitest',
  'Playwright',
]
