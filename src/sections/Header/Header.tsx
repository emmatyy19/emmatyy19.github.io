import { site } from '../../content/site.ts'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1>{site.name}</h1>
    </header>
  )
}
