import type { JourneyEntry } from '../../types/content.ts'
import { PhotoPlaceholder } from '../PhotoPlaceholder/PhotoPlaceholder.tsx'
import styles from './JourneyCollage.module.css'

type JourneyCollageProps = Readonly<{
  entry: JourneyEntry
}>

export function JourneyCollage({ entry }: JourneyCollageProps) {
  return (
    <div className={styles.composition} data-city={entry.id}>
      <div className={styles.stage}>
        <div className={styles.primary}>
          <PhotoPlaceholder
            label={entry.primaryPlaceholder.label}
            variant={entry.primaryPlaceholder.orientation}
          />
        </div>
        {entry.supportingPlaceholders.map((placeholder, index) => (
          <div
            className={styles.supporting}
            data-position={index + 1}
            key={placeholder.id}
          >
            <PhotoPlaceholder
              label={placeholder.label}
              variant={placeholder.orientation}
            />
          </div>
        ))}
        <span aria-hidden="true" className={styles.wash} />
      </div>
      {entry.caption === undefined ? null : (
        <p className={styles.caption}>{entry.caption}</p>
      )}
    </div>
  )
}
