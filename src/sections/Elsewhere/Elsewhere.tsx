import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import babysBreathUrl from '../../assets/decor/pressed-babys-breath.webp'
import { BinderTabs } from './BinderTabs.tsx'
import styles from './Elsewhere.module.css'

export function Elsewhere() {
  return (
    <section aria-labelledby="elsewhere-heading" className={styles.section}>
      <div className={styles.intro}>
        <img
          alt=""
          aria-hidden="true"
          className={styles.botanical}
          loading="lazy"
          src={babysBreathUrl}
        />
        <SectionHeading accent="blue" id="elsewhere-heading">
          Elsewhere
        </SectionHeading>
        <p>
          When I’m not at my computer, I’m usually working on my golf swing or
          crocheting something small. They are my favorite ways to slow down,
          reset, and be creative. I love the calm of repetition, the little
          sense of adventure that comes with trying something new, and the
          chance to improve at my own pace. Both give me quiet space to think
          and reflect.
        </p>
      </div>
      <BinderTabs />
    </section>
  )
}
