import type { ImageAsset, JourneyEntry } from '../../types/content.ts'
import { PhotoPlaceholder } from '../PhotoPlaceholder/PhotoPlaceholder.tsx'
import styles from './JourneyCollage.module.css'

type JourneyCollageProps = Readonly<{
  entry: JourneyEntry
}>

function JourneyImage({ image }: Readonly<{ image: ImageAsset }>) {
  return (
    <figure className={styles.imageFrame} data-variant={image.orientation}>
      <img
        alt={image.alt}
        className={styles.image}
        loading="lazy"
        src={image.src}
      />
    </figure>
  )
}

export function JourneyCollage({ entry }: JourneyCollageProps) {
  return (
    <div className={styles.composition} data-city={entry.id}>
      <div className={styles.stage}>
        <div className={styles.primary}>
          {entry.primaryImage ? (
            <JourneyImage image={entry.primaryImage} />
          ) : (
            <PhotoPlaceholder
              label={entry.primaryPlaceholder.label}
              variant={entry.primaryPlaceholder.orientation}
            />
          )}
        </div>
        {entry.supportingImages.length > 0
          ? entry.supportingImages.map((image, index) => (
              <div
                className={styles.supporting}
                data-position={index + 1}
                key={image.id}
              >
                <JourneyImage image={image} />
              </div>
            ))
          : entry.supportingPlaceholders.map((placeholder, index) => (
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
      </div>
      {entry.caption === undefined ? null : (
        <p className={styles.caption}>{entry.caption}</p>
      )}
    </div>
  )
}
