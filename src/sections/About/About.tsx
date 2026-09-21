import libertyBridgeUrl from '../../assets/education/statue-liberty-bridge.png'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { aboutCopy } from '../../content/about.ts'
import styles from './About.module.css'

export function About() {
  return (
    <section aria-labelledby="about-heading" className={styles.about}>
      <SectionHeading id="about-heading">About</SectionHeading>
      <p>{aboutCopy}</p>
      <img
        alt=""
        aria-hidden="true"
        className={styles.liberty}
        loading="lazy"
        src={libertyBridgeUrl}
      />
    </section>
  )
}
