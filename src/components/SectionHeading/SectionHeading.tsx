import styles from './SectionHeading.module.css'

type SectionHeadingProps = Readonly<{
  id: string
  children: string
  accent?: 'blush' | 'olive' | 'blue'
}>

export function SectionHeading({
  id,
  children,
  accent = 'olive',
}: SectionHeadingProps) {
  return (
    <h2 className={styles.heading} data-accent={accent} id={id}>
      {children}
    </h2>
  )
}
