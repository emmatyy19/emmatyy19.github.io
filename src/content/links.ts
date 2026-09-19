import type { ProfessionalLink } from '../types/content.ts'

export const professionalLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: 'https://github.com/emmatyy19?tab=repositories',
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
    href: '/documents/emma-resume.pdf',
    external: false,
    download: 'Emma-Resume.pdf',
  },
] satisfies readonly ProfessionalLink[]
