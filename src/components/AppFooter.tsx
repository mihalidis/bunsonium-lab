import styles from './AppFooter.module.css'

export default function AppFooter() {
  return (
    <footer className={styles.footer}>
      <span className={styles.logo}>
        <span className={styles.bracket}>[</span>
        bunsonium
        <span className={styles.accent}>lab</span>
        <span className={styles.bracket}>]</span>
      </span>
      <span className={styles.copy}>
        Every experiment starts here — some explode, some ship.
      </span>
    </footer>
  )
}
