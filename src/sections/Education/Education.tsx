import ginkgoUrl from '../../assets/decor/pressed-ginkgo.webp'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { educationEntries } from '../../content/education.ts'
import styles from './Education.module.css'

export function Education() {
  return (
    <section aria-labelledby="education-heading" className={styles.section}>
      <SectionHeading accent="blue" id="education-heading">
        Education
      </SectionHeading>
      <div className={styles.path}>
        {educationEntries.map((entry) => (
          <div className={styles.step} key={entry.id}>
            <article className={styles.entry} data-school={entry.id}>
              <h3>{entry.institution}</h3>
              <figure className={styles.sketch}>
                <img
                  alt={entry.image.alt}
                  className={styles.schoolImage}
                  loading="lazy"
                  src={entry.image.src}
                />
                {entry.id === 'nyu' ? (
                  <img
                    alt=""
                    aria-hidden="true"
                    className={styles.leafAccent}
                    loading="lazy"
                    src={ginkgoUrl}
                  />
                ) : null}
              </figure>
              <div className={styles.caption}>
                <p className={styles.degree}>{entry.degree}</p>
                <p>{entry.focus}</p>
                <p className={styles.detail}>{entry.detail}</p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
