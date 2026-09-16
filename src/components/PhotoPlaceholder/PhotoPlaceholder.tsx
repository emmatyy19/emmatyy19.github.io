import styles from './PhotoPlaceholder.module.css'

type PhotoPlaceholderProps = Readonly<{
  label: string
  variant?: 'portrait' | 'landscape' | 'square'
}>

export function PhotoPlaceholder({
  label,
  variant = 'landscape',
}: PhotoPlaceholderProps) {
  return (
    <figure className={styles.frame} data-variant={variant}>
      <div aria-hidden="true" className={styles.image} />
      <figcaption className={styles.caption}>{label}</figcaption>
    </figure>
  )
}
