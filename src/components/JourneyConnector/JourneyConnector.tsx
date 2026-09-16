import styles from './JourneyConnector.module.css'

export function JourneyConnector() {
  return (
    <svg
      aria-hidden="true"
      className={styles.connector}
      focusable="false"
      viewBox="0 0 72 30"
    >
      <path d="M3 17C22 11 42 12 65 15" />
      <path d="m57 8 9 7-10 6" />
    </svg>
  )
}
