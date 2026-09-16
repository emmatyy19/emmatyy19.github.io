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
    href: 'https://www.linkedin.com/in/emma-t-81bb7917a/',
    external: true,
  },
  {
    id: 'resume',
    label: 'Resume',
    href: '#replace-resume-url',
    external: false,
  },
] satisfies readonly ProfessionalLink[]
