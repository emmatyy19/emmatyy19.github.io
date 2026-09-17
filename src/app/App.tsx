import { About } from '../sections/About/About.tsx'
import { Education } from '../sections/Education/Education.tsx'
import { Elsewhere } from '../sections/Elsewhere/Elsewhere.tsx'
import { Footer } from '../sections/Footer/Footer.tsx'
import { Header } from '../sections/Header/Header.tsx'
import { Hero } from '../sections/Hero/Hero.tsx'
import { Journey } from '../sections/Journey/Journey.tsx'
import styles from './App.module.css'

export function App() {
  return (
    <div className={styles.page}>
      <Header />
      <main className={styles.main}>
        <Hero />
        <About />
        <Journey />
        <Education />
        <Elsewhere />
      </main>
      <Footer />
    </div>
  )
}
