import type { Metadata } from 'next'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import ChromeButton from '@/components/ChromeButton'
import styles from './page.module.css'

const CHROME_WEB_STORE_URL =
  'https://chromewebstore.google.com/detail/uyap-tebligat-ptt-takip/fonpafengkihaalljejgnpghgjbdlfpo'

export const metadata: Metadata = {
  title: 'UYAP Tebligat PTT Takip — Ücretsiz Chrome Uzantısı',
  description:
    'UYAP üzerindeki PTT tebligat barkodlarını otomatik okuyup sorgulayan ücretsiz Chrome uzantısı.',
  openGraph: {
    title: 'UYAP Tebligat PTT Takip',
    description: 'Otomatik barkod okuma, anında PTT sorgulama.',
    type: 'website',
  },
}

export default function UyapPage() {
  return (
    <>
      <AppNav />

      <div className={styles.page}>

        {/* ── Hero ───────────────────────────── */}
        <section className={styles.hero}>
          <div className={styles.rings}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className={styles.ring} style={{ '--i': i } as React.CSSProperties} />
            ))}
          </div>
          <div className={styles.heroGlow} />

          <div className={styles.heroInner}>
            {/* back link */}
            <Link href="/" className={styles.backLink}>
              ← Tüm Projeler
            </Link>

            <div className={styles.heroBadge}>
              <span className={styles.badgeDot} />
              <span>Chrome Extension · Ücretsiz · uyap.gov.tr</span>
            </div>

            <h1 className={styles.heroTitle}>
              UYAP<br />
              <span className={styles.red}>TEBLİGAT</span><br />
              <span className={styles.outline}>PTT TAKİP</span>
            </h1>

            <p className={styles.heroSub}>
              UYAP üzerindeki PTT tebligat barkodlarını otomatik okur,
              anında sorgular. Tek ekle, gerisini unut.
            </p>

            <div className={styles.heroActions}>
              <ChromeButton href={CHROME_WEB_STORE_URL} />
              <a href="#nasil-calisir" className={styles.btnSecondary}>
                Nasıl çalışır? →
              </a>
            </div>

            {/* Browser mockup */}
            <div className={styles.mockup}>
              <div className={styles.browserBar}>
                <div className={styles.browserDots}>
                  <span /><span /><span />
                </div>
                <div className={styles.browserUrl}>uyap.uyap.gov.tr/</div>
                <div className={styles.extBadge}>
                  <UyapIcon size={14} />
                  <span>Takip</span>
                </div>
              </div>
              <div className={styles.browserContent}>
                <PopupSim />
              </div>
            </div>
          </div>
        </section>

        {/* ── Stats ──────────────────────────── */}
        <div className={styles.statsBar}>
          {[
            { num: '0TL',   label: 'Tamamen Ücretsiz' },
            { num: '1 TIK', label: 'Anında Sonuç' },
            { num: '%100',  label: 'Güvenli & Yerel' },
            { num: '7/24',  label: 'Her Zaman Hazır' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <div className={styles.statNum}>{s.num}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </div>

        {/* ── How it works ───────────────────── */}
        <section id="nasil-calisir" className={styles.section}>
          <div className={styles.sectionLabel}>Nasıl Çalışır?</div>
          <h2 className={styles.sectionTitle}>
            ÜÇ ADIMDA<br /><span className={styles.red}>TAMAMLANDI</span>
          </h2>
          <p className={styles.sectionDesc}>
            Kurulum bir kez, sorgulama sonsuz. UYAP&apos;ı açtığın anda uzantı devreye girer.
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
        <section id="ozellikler" className={styles.featuresSection}>
          <div className={styles.sectionLabel}>Özellikler</div>
          <h2 className={styles.sectionTitle}>
            NEDEN <span className={styles.red}>BU</span><br />UZANTI?
          </h2>
          <p className={styles.sectionDesc}>
            Sadece ihtiyacın olanı yapıyor. Fazlası yok, eksiği de yok.
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

        {/* ── FAQ ────────────────────────────── */}
        <section id="sss" className={styles.faqSection}>
          <div className={styles.sectionLabel}>SSS</div>
          <h2 className={styles.sectionTitle} style={{ marginBottom: '48px' }}>
            SIK SORULAN<br /><span className={styles.red}>SORULAR</span>
          </h2>
          <FaqList />
        </section>

        {/* ── CTA ────────────────────────────── */}
        <section id="indir" className={styles.ctaSection}>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              HEMEN <span className={styles.red}>EKLE</span><br />KULLANMAYA BAŞLA
            </h2>
            <p className={styles.ctaDesc}>
              UYAP tebligat takibinde bir kez daha tab açma, elle kod kopyalama devri bitti.
            </p>
            <ChromeButton
              label="Chrome Web Store'dan Ücretsiz Ekle"
              href={CHROME_WEB_STORE_URL}
            />
          </div>
        </section>
      </div>

      <AppFooter />
    </>
  )
}

/* ── Sub-components ──────────────────────────────── */

function UyapIcon({ size = 24 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 128 128" fill="none">
      <rect x="8" y="24" width="72" height="52" rx="5" fill="white" opacity="0.95" />
      <polyline points="8,24 44,54 80,24" fill="none" stroke="#C0392B" strokeWidth="4" strokeLinejoin="round" />
      <line x1="8" y1="76" x2="30" y2="52" stroke="#C0392B" strokeWidth="3" />
      <line x1="80" y1="76" x2="58" y2="52" stroke="#C0392B" strokeWidth="3" />
      <circle cx="96" cy="90" r="24" fill="#1a252f" />
      <circle cx="94" cy="88" r="13" fill="none" stroke="white" strokeWidth="3.5" />
      <line x1="103" y1="97" x2="114" y2="108" stroke="white" strokeWidth="4.5" strokeLinecap="round" />
      <rect x="89" y="82" width="2" height="10" rx="0.5" fill="white" opacity="0.9" />
      <rect x="93" y="81" width="1.5" height="12" rx="0.5" fill="white" opacity="0.9" />
      <rect x="97" y="82" width="2" height="10" rx="0.5" fill="white" opacity="0.9" />
    </svg>
  )
}

function PopupSim() {
  return (
    <div className={styles.popupSim}>
      <div className={styles.popupHeader}>
        <div className={styles.popupHeaderIcon}><UyapIcon size={28} /></div>
        <div>
          <div className={styles.popupHeaderTitle}>UYAP Tebligat PTT Takip</div>
          <div className={styles.popupHeaderSub}>Tebligat barkodunu otomatik okur ve sorgular</div>
        </div>
      </div>
      <div className={styles.popupBody}>
        <div className={styles.popupFieldLabel}>Tespit Edilen Barkod No</div>
        <div className={styles.popupBarcode}>27893964198 41</div>
        <button className={styles.popupBtn}>🔍 &nbsp;Tekrar Sorgula</button>
        <div className={styles.popupResult}>
          <span>✅</span>
          <div>
            <div className={styles.resultTitle}>PTT: Teslim Edildi</div>
            <div className={styles.resultSub}>15.06.2025 · 10:42 · Alıcıya teslim edildi</div>
          </div>
        </div>
      </div>
      <div className={styles.popupFooter}>Yalnızca uyap.gov.tr domaininde çalışır</div>
    </div>
  )
}

function FaqList() {
  const faqs = [
    {
      q: 'Uzantı kişisel verilerimi topluyor mu?',
      a: 'Hayır. Uzantı hiçbir veriyi dış sunucuya iletmez. Tüm işlemler tarayıcında, yerel olarak gerçekleşir.',
    },
    {
      q: 'Hangi tarayıcıları destekliyor?',
      a: 'Google Chrome ve Chromium tabanlı tarayıcılar (Edge, Brave, Vivaldi) desteklenmektedir.',
    },
    {
      q: 'UYAP dışındaki sitelerde de çalışıyor mu?',
      a: 'Hayır. Uzantı yalnızca uyap.gov.tr domaininde aktif olacak şekilde kısıtlanmıştır.',
    },
    {
      q: 'Barkod bulunamazsa ne olur?',
      a: '"KAYIT YOK" uyarısı görünür. Tebligatın henüz sisteme işlenmemiş olabileceğini gösterir.',
    },
    {
      q: 'Ücretsiz mi, kalıcı olarak?',
      a: 'Evet. Abonelik yok, reklam yok, premium plan yok. Geçmişte, şimdi ve gelecekte ücretsiz.',
    },
  ]

  return (
    <div className={styles.faqList}>
      {faqs.map((faq) => (
        <FaqItem key={faq.q} q={faq.q} a={faq.a} />
      ))}
    </div>
  )
}

function FaqItem({ q, a }: { q: string; a: string }) {
  'use client'
  return (
    <details className={styles.faqItem}>
      <summary className={styles.faqQuestion}>
        {q}
        <span className={styles.faqIcon}>+</span>
      </summary>
      <p className={styles.faqAnswer}>{a}</p>
    </details>
  )
}

/* ── Static data ─────────────────────────────────── */

const steps = [
  {
    num: '01',
    icon: '🔌',
    title: "Chrome'a Ekle",
    desc: "Chrome Web Store'dan ücretsiz olarak tek tıkla yükle. Kayıt yok, hesap yok.",
  },
  {
    num: '02',
    icon: '🌐',
    title: "UYAP'ı Aç",
    desc: "uyap.gov.tr'yi açtığında uzantı otomatik olarak aktif hale gelir ve barkodu tespit eder.",
  },
  {
    num: '03',
    icon: '🔍',
    title: 'Sonucu Gör',
    desc: 'Barkod okunur, PTT üzerinden sorgulanır, teslim durumu anında ekranda belirir.',
  },
]

const features = [
  { icon: '⚡', title: 'Otomatik Barkod Okuma',  desc: 'UYAP sayfasında barkod numarasını elle girmene gerek yok. Uzantı sayfayı tarayarak tespit eder.' },
  { icon: '🔒', title: "Sadece UYAP'ta Çalışır", desc: 'Uzantı yalnızca uyap.gov.tr domaininde aktif olur. Başka sitelerde hiçbir şey okumaz.' },
  { icon: '🛡️', title: 'Gizlilik Odaklı',        desc: 'Hiçbir veri sunucuya gönderilmez. Tüm işlemler tarayıcında, senin bilgisayarında gerçekleşir.' },
  { icon: '📦', title: 'Hafif & Hızlı',           desc: 'Gereksiz izin, gereksiz kod yok. Minimal yapısıyla tarayıcını yavaşlatmaz.' },
  { icon: '🔄', title: 'Tekrar Sorgulama',        desc: 'Durumu değişmiş olabilir. Popup üzerindeki tek bir tıkla anında yeniden sorgulayabilirsin.' },
  { icon: '🆓', title: 'Tamamen Ücretsiz',        desc: 'Abonelik yok, reklam yok, premium plan yok. Geçmişte, şimdi ve gelecekte ücretsiz.' },
]
