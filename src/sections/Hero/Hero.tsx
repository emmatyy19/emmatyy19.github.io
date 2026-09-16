import { ExternalLink } from '../../components/ExternalLink/ExternalLink.tsx'
import { professionalLinks } from '../../content/links.ts'
import { site } from '../../content/site.ts'
import portraitUrl from '../../assets/hero/emma-portrait.jpg'
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
        <figure className={styles.photoFrame}>
          <img
            alt="Portrait of Emma"
            className={styles.photo}
            fetchPriority="high"
            src={portraitUrl}
          />
        </figure>
      </div>
    </section>
  )
}
