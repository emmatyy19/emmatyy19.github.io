import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { aboutCopy } from '../../content/about.ts'
import styles from './About.module.css'

export function About() {
  return (
    <section aria-labelledby="about-heading" className={styles.about}>
      <SectionHeading id="about-heading">About</SectionHeading>
      <p>{aboutCopy}</p>
      <div aria-hidden="true" className={styles.sketch}>
        <span>[ACADEMIC_SKETCH]</span>
      </div>
    </section>
  )
}
