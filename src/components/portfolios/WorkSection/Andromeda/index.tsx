import styles from './styles.module.css'

type Project = {
  name: string
  logo: string
  url?: string
}

type WorkSectionProps = {
  projects: Project[]
}

export const WorkSectionAndromeda = ({ projects }: WorkSectionProps) => {
  return (
    <section className={styles.workSection}>
      <h2 className={styles.title}>/work.</h2>
      <p className={styles.subtitle}>
        Selected work I've taken on in the past.
      </p>

      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <img
              src={project.logo}
              alt={project.name}
              className={styles.logo}
            />
            <div className={styles.info}>
              <strong>{project.name}</strong>
              {project.url && (
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                  {project.url}
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
