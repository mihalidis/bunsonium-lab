import type { Metadata } from 'next'
import Link from 'next/link'
import AppNav from '@/components/AppNav'
import AppFooter from '@/components/AppFooter'
import MoleculeBackground from '@/components/MoleculeBackground'
import { projects } from '@/lib/projects'
import styles from './page.module.css'

export const metadata: Metadata = {
  title: 'Bunsonium Lab — Scratch Your Own Itch',
  description: 'Projects born from real problems. AI-assisted, built fast.',
}

export default function HomePage() {
  return (
    <>
      <MoleculeBackground />
      <AppNav />

      <main>
        {/* ── Hub Header ───────────────────────── */}
        <div className={styles.hubHeader}>
          <div className={styles.hubInner}>
            <div className={styles.hubTag}>
              <span className={styles.tagDot} />
              Bunsonium Lab · Istanbul
            </div>
            <h1 className={styles.hubTitle}>
              Scratch<br />
              <span className={styles.gradientText}>Your Own Itch.</span>
            </h1>
            <p className={styles.hubSub}>
              A real problem, some AI, a weekend. That's usually enough.
            </p>
          </div>
        </div>

        {/* ── Projects ─────────────────────────── */}
        <section id="projeler" className={styles.projectsSection}>
          <div className={styles.sectionHeader}>
            <div className={styles.sectionLabel}>Projects</div>
            <h2 className={styles.sectionTitle}>Making Things.</h2>
            <p className={styles.sectionDesc}>
              More on the way. Each one started with a real problem.
            </p>
          </div>

          <div className={styles.projectsGrid}>
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={`/${project.slug}`}
                className={styles.projectCard}
                style={{ '--accent': project.accent } as React.CSSProperties}
              >
                <div className={styles.cardTop}>
                  <span className={styles.cardIcon}>{project.icon}</span>
                  <div className={styles.cardTopRight}>
                    {project.status && (
                      <span className={`${styles.statusBadge} ${styles[`status_${project.status.replace(' ', '_')}`]}`}>
                        {project.status}
                      </span>
                    )}
                    <span className={styles.cardTag}>{project.tag}</span>
                  </div>
                </div>
                <h3 className={styles.cardTitle}>{project.title}</h3>
                <p className={styles.cardDesc}>{project.desc}</p>
                <div className={styles.cardFooter}>
                  <div className={styles.cardTechs}>
                    {project.techs.map((tech) => (
                      <span key={tech} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                  <span className={styles.cardArrow}>→</span>
                </div>
              </Link>
            ))}

            {/* "Coming soon" placeholder */}
            <div className={styles.comingSoon}>
              <span className={styles.comingSoonIcon}>🚧</span>
              <p>More projects coming...</p>
            </div>
          </div>
        </section>
      </main>

      <AppFooter />
    </>
  )
}
