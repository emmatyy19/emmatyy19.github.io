import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { hobbyGalleries } from '../../content/elsewhere.ts'
import styles from './Elsewhere.module.css'

export function Elsewhere() {
  return (
    <section aria-labelledby="elsewhere-heading" className={styles.section}>
      <div className={styles.intro}>
        <SectionHeading accent="blue" id="elsewhere-heading">
          Elsewhere
        </SectionHeading>
        <p>[ELSEWHERE_INTRO]</p>
      </div>
      <div className={styles.binder}>
        <div aria-label="Hobby gallery categories" className={styles.tabs}>
          {hobbyGalleries.map((gallery) => (
            <span className={styles.tab} key={gallery.id}>
              {gallery.label}
            </span>
          ))}
        </div>
        <div className={styles.sheet}>
          <p>[ACCESSIBLE_BINDER_GALLERY_COMING_NEXT]</p>
        </div>
      </div>
    </section>
  )
}
