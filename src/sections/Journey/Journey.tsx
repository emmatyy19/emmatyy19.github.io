import { JourneyCollage } from '../../components/JourneyCollage/JourneyCollage.tsx'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { journeyEntries } from '../../content/journey.ts'
import maidenhairUrl from '../../assets/decor/pressed-maidenhair.webp'
import styles from './Journey.module.css'

export function Journey() {
  return (
    <section aria-labelledby="journey-heading" className={styles.section}>
      <div className={styles.heading}>
        <SectionHeading accent="blush" id="journey-heading">
          My Journey
        </SectionHeading>
      </div>
      <img
        alt=""
        aria-hidden="true"
        className={styles.boardLeaves}
        loading="lazy"
        src={maidenhairUrl}
      />
      <div className={styles.timeline}>
        {journeyEntries.map((entry) => (
          <div className={styles.step} key={entry.id}>
            <article className={styles.entry} data-city={entry.id}>
              <header>
                <h3>{entry.city}</h3>
                <p>{entry.duration}</p>
              </header>
              <JourneyCollage entry={entry} />
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}
