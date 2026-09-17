import libertyBridgeUrl from '../../assets/education/statue-liberty-bridge.png'
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
        {educationEntries.map((entry, index) => (
          <div className={styles.step} key={entry.id}>
            <article className={styles.entry} data-school={entry.id}>
              <h3>{entry.institution}</h3>
              <figure className={styles.sketch}>
                <img
                  alt={entry.image.alt}
                  loading="lazy"
                  src={entry.image.src}
                />
              </figure>
              <div className={styles.caption}>
                <p className={styles.degree}>{entry.degree}</p>
                <p>{entry.focus}</p>
                <p className={styles.detail}>{entry.detail}</p>
              </div>
            </article>
            {index === 0 ? (
              <figure aria-hidden="true" className={styles.bridge}>
                <img alt="" loading="lazy" src={libertyBridgeUrl} />
              </figure>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
