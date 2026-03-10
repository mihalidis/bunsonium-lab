'use client'

import { useState } from 'react'
import styles from './ChromeButton.module.css'

export default function ChromeButton({ label = "Chrome'a Ücretsiz Ekle" }: { label?: string }) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className={styles.btnPrimary} onClick={() => setOpen(true)}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {label}
      </button>

      {open && (
        <div className={styles.overlay} onClick={() => setOpen(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button className={styles.close} onClick={() => setOpen(false)}>✕</button>

            {/* Flask animation */}
            <div className={styles.flaskWrap}>
              <svg className={styles.flask} viewBox="0 0 120 160" xmlns="http://www.w3.org/2000/svg">
                {/* neck */}
                <rect x="42" y="10" width="36" height="40" rx="4" fill="none" stroke="#C0392B" strokeWidth="3"/>
                {/* neck cap */}
                <rect x="36" y="6" width="48" height="10" rx="5" fill="#C0392B" opacity="0.6"/>

                {/* flask body clip */}
                <defs>
                  <clipPath id="bodyClip">
                    <path d="M42,50 L20,110 Q10,130 20,140 Q30,150 60,150 Q90,150 100,140 Q110,130 100,110 L78,50 Z"/>
                  </clipPath>
                </defs>

                {/* liquid fill */}
                <rect x="0" y="95" width="120" height="60" fill="url(#liqGrad)" clipPath="url(#bodyClip)" className={styles.liquid}/>

                {/* gradient def */}
                <defs>
                  <linearGradient id="liqGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#f97316"/>
                    <stop offset="50%" stopColor="#ec4899"/>
                    <stop offset="100%" stopColor="#8b5cf6"/>
                  </linearGradient>
                </defs>

                {/* flask body outline */}
                <path d="M42,50 L20,110 Q10,130 20,140 Q30,150 60,150 Q90,150 100,140 Q110,130 100,110 L78,50 Z"
                  fill="none" stroke="#C0392B" strokeWidth="3" strokeLinejoin="round"/>

                {/* bubbles */}
                <circle className={`${styles.bubble} ${styles.b1}`} cx="40" cy="120" r="5" fill="white" opacity="0.4"/>
                <circle className={`${styles.bubble} ${styles.b2}`} cx="60" cy="110" r="4" fill="white" opacity="0.35"/>
                <circle className={`${styles.bubble} ${styles.b3}`} cx="78" cy="125" r="6" fill="white" opacity="0.3"/>
                <circle className={`${styles.bubble} ${styles.b4}`} cx="52" cy="130" r="3" fill="white" opacity="0.4"/>
                <circle className={`${styles.bubble} ${styles.b5}`} cx="70" cy="118" r="3.5" fill="white" opacity="0.35"/>

                {/* steam */}
                <path className={`${styles.steam} ${styles.s1}`} d="M52,8 Q48,0 52,-8" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <path className={`${styles.steam} ${styles.s2}`} d="M60,8 Q56,0 60,-8" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
                <path className={`${styles.steam} ${styles.s3}`} d="M68,8 Q64,0 68,-8" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </div>

            <div className={styles.label}>Deney devam ediyor</div>
            <h2 className={styles.title}>Yakında</h2>
            <p className={styles.desc}>
              Bu uzantı henüz Chrome Web Store&apos;da yayınlanmadı.<br />
              Test aşaması tamamlandığında burada olacak.
            </p>
            <button className={styles.closeBtn} onClick={() => setOpen(false)}>
              Tamam, bekliyorum
            </button>
          </div>
        </div>
      )}
    </>
  )
}
