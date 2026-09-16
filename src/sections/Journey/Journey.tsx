import { JourneyCollage } from '../../components/JourneyCollage/JourneyCollage.tsx'
import { JourneyConnector } from '../../components/JourneyConnector/JourneyConnector.tsx'
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
              <JourneyCollage entry={entry} />
            </article>
            {index < journeyEntries.length - 1 ? <JourneyConnector /> : null}
          </div>
        ))}
      </div>
    </section>
  )
}
