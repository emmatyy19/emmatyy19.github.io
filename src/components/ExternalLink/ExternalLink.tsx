import type { ProfessionalLink } from '../../types/content.ts'
import styles from './ExternalLink.module.css'

type ExternalLinkProps = Readonly<{
  link: ProfessionalLink
}>

export function ExternalLink({ link }: ExternalLinkProps) {
  return (
    <a
      className={styles.link}
      href={link.href}
      {...(link.external
        ? { rel: 'noopener noreferrer', target: '_blank' }
        : {})}
    >
      {link.label}
      <span aria-hidden="true">↗</span>
    </a>
  )
}
