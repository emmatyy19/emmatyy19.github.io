import { PhotoPlaceholder } from '../../components/PhotoPlaceholder/PhotoPlaceholder.tsx'
import type { HobbyGallery as HobbyGalleryContent } from '../../types/content.ts'
import styles from './HobbyGallery.module.css'

type HobbyGalleryProps = Readonly<{
  gallery: HobbyGalleryContent
}>

export function HobbyGallery({ gallery }: HobbyGalleryProps) {
  return (
    <div className={styles.gallery} data-hobby={gallery.id}>
      {gallery.placeholders.map((placeholder) => (
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
