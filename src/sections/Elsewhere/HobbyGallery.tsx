import { PhotoPlaceholder } from '../../components/PhotoPlaceholder/PhotoPlaceholder.tsx'
import type { HobbyGallery as HobbyGalleryContent } from '../../types/content.ts'
import styles from './HobbyGallery.module.css'

type HobbyGalleryProps = Readonly<{
  gallery: HobbyGalleryContent
}>

export function HobbyGallery({ gallery }: HobbyGalleryProps) {
  const hasImages = gallery.images.length > 0

  return (
    <div className={styles.gallery} data-hobby={gallery.id}>
      {hasImages
        ? gallery.images.map((image) => (
            <div className={styles.item} key={image.id}>
              <figure
                className={styles.photo}
                data-image={image.id}
                data-variant={image.orientation ?? 'landscape'}
              >
                <img alt={image.alt} loading="lazy" src={image.src} />
              </figure>
            </div>
          ))
        : gallery.placeholders.map((placeholder) => (
            <div className={styles.item} key={placeholder.id}>
              <PhotoPlaceholder
                label={placeholder.label}
                variant={placeholder.orientation}
              />
            </div>
          ))}
    </div>
  )
}
