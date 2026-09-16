import { site } from '../../content/site.ts'
import styles from './Footer.module.css'

export function Footer() {
  return (
    <footer className={styles.footer}>
      <p>{site.footer}</p>
    </footer>
  )
}
