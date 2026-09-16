import { ExternalLink } from '../../components/ExternalLink/ExternalLink.tsx'
import { PhotoPlaceholder } from '../../components/PhotoPlaceholder/PhotoPlaceholder.tsx'
import { professionalLinks } from '../../content/links.ts'
import { site } from '../../content/site.ts'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section aria-label="Intro" className={styles.hero}>
      <div className={styles.copy}>
        <p>{site.intro}</p>
        <nav aria-label="Professional links" className={styles.links}>
          {professionalLinks.map((link) => (
            <ExternalLink key={link.id} link={link} />
          ))}
        </nav>
      </div>
      <div className={styles.portrait}>
        <span aria-hidden="true" className={styles.tape} />
        <PhotoPlaceholder label="[HERO_PORTRAIT]" variant="portrait" />
      </div>
    </section>
  )
}
