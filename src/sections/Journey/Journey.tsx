import { PhotoPlaceholder } from '../../components/PhotoPlaceholder/PhotoPlaceholder.tsx'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { journeyEntries } from '../../content/journey.ts'
import styles from './Journey.module.css'

export function Journey() {
  return (
    <section aria-labelledby="journey-heading" className={styles.section}>
      <SectionHeading accent="blush" id="journey-heading">
        My Journey
      </SectionHeading>
      <div className={styles.timeline}>
        {journeyEntries.map((entry, index) => (
          <div className={styles.step} key={entry.id}>
            <article className={styles.entry} data-city={entry.id}>
              <header>
                <h3>{entry.city}</h3>
                <p>{entry.duration}</p>
              </header>
              <PhotoPlaceholder label={`[${entry.id.toUpperCase()}_PRIMARY]`} />
            </article>
            {index < journeyEntries.length - 1 ? (
              <span aria-hidden="true" className={styles.connector}>
                →
              </span>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  )
}
