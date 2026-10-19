import { FaGithub } from 'react-icons/fa6'
import { SectionHeading } from '../../components/SectionHeading/SectionHeading.tsx'
import { projects } from '../../content/projects.ts'
import styles from './Projects.module.css'
import golfArt from '../../assets/projects/golf-sketch.png'
import usagiArt from '../../assets/projects/usagi-sketch.png'

export function Projects() {
  return (
    <section aria-labelledby="projects-heading" className={styles.section}>
      <div className={styles.heading}>
        <span aria-hidden="true" className={styles.tape} />
        <SectionHeading id="projects-heading">
          Fun things I’m working on
        </SectionHeading>
      </div>
      <ul className={styles.list}>
        {projects.map((project) => (
          <li className={styles.project} key={project.id}>
            <div className={styles.copy}>
              <h3>{project.name}</h3>
              <p>{project.description}</p>
              <div className={styles.links}>
                <a
                  aria-label={`${project.linkLabel}: ${project.name}`}
                  href={project.showcase}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {project.linkLabel}
                </a>
                <a
                  aria-label={`${project.name} on GitHub`}
                  href={project.repository}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <FaGithub aria-hidden="true" />
                  GitHub
                </a>
              </div>
            </div>
            <img
              className={styles.illustration}
              src={project.id === 'my-caddie' ? golfArt : usagiArt}
              alt=""
              aria-hidden="true"
              loading="lazy"
            />
          </li>
        ))}
      </ul>
    </section>
  )
}
