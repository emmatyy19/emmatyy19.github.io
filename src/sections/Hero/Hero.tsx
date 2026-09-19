import { PiFlowerTulipThin, PiHeartThin, PiSparkleThin } from 'react-icons/pi'
import { ExternalLink } from '../../components/ExternalLink/ExternalLink.tsx'
import { ResumePreview } from '../../components/ResumePreview/ResumePreview.tsx'
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
            <span key={link.id}>
              {link.id === 'resume' ? (
                <ResumePreview link={link} />
              ) : (
                <ExternalLink link={link} />
              )}
            </span>
          ))}
        </nav>
      </div>
      <div className={styles.portrait}>
        <PiSparkleThin
          aria-hidden="true"
          className={[styles.doodle, styles.sparkle].join(' ')}
        />
        <PiHeartThin
          aria-hidden="true"
          className={[styles.doodle, styles.heart].join(' ')}
        />
        <PiFlowerTulipThin
          aria-hidden="true"
          className={[styles.doodle, styles.flower].join(' ')}
        />
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
