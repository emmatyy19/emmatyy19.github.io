import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { BinderTabs } from './BinderTabs.tsx'
import styles from './Elsewhere.module.css'

export function Elsewhere() {
  return (
    <section aria-labelledby="elsewhere-heading" className={styles.section}>
      <div className={styles.intro}>
        <SectionHeading accent="blue" id="elsewhere-heading">
          Elsewhere
        </SectionHeading>
        <p>
          Off-screen, I trade code for golf courses and yarn—two slower crafts
          that reward patience, repetition, and a little play.
        </p>
      </div>
      <BinderTabs />
    </section>
  )
}
