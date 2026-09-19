import { PhotoPlaceholder } from '../../components/PhotoPlaceholder/PhotoPlaceholder.tsx'
import type { HobbyGallery as HobbyGalleryContent } from '../../types/content.ts'
import oliveUrl from '../../assets/decor/pressed-olive.webp'
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
                data-paired={image.secondary ? 'true' : undefined}
                data-variant={image.orientation ?? 'landscape'}
              >
                <div className={styles.photoSequence}>
                  <img alt={image.alt} loading="lazy" src={image.src} />
                  {image.secondary ? (
                    <>
                      <span aria-hidden="true" className={styles.sequenceMark}>
                        →
                      </span>
                      <img
                        alt={image.secondary.alt}
                        loading="lazy"
                        src={image.secondary.src}
                      />
                    </>
                  ) : null}
                </div>
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
      {gallery.id === 'golf' ? (
        <img
          alt=""
          aria-hidden="true"
          className={styles.leafAccent}
          loading="lazy"
          src={oliveUrl}
        />
      ) : null}
    </div>
  )
}
