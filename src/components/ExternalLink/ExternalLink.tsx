import { FaGithub, FaLinkedinIn } from 'react-icons/fa6'
import type { ProfessionalLink } from '../../types/content.ts'
import styles from './ExternalLink.module.css'

type ExternalLinkProps = Readonly<{
  link: ProfessionalLink
}>

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
} as const

export function ExternalLink({ link }: ExternalLinkProps) {
  if (link.id === 'resume') return null

  const Icon = icons[link.id]

  return (
    <a
      className={styles.link}
      download={link.download}
      href={link.href}
      {...(link.external
        ? { rel: 'noopener noreferrer', target: '_blank' }
        : {})}
    >
      <Icon aria-hidden="true" className={styles.icon} />
      {link.label}
    </a>
  )
}
