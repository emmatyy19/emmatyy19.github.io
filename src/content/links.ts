import type { ProfessionalLink } from '../types/content.ts'

export const professionalLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: '#replace-github-url',
    external: true,
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: '#replace-linkedin-url',
    external: true,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '#replace-resume-url',
    external: false,
  },
] satisfies readonly ProfessionalLink[]
