import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAndromedaProps } from './types'

const defaultStyles = {
  '--item-bg': 'var(--bg-secondary)',
  '--link-color': 'var(--anchor-color)',
  '--subtitle-color': 'var(--base-color-4)',
  '--title-color': 'var(--title-color)',
}

export const WorkSectionAndromeda = ({
  projects,
  translations = translationsSources,
  style,
}: WorkSectionAndromedaProps) => {
  return (
    <section
      className={styles.workSection}
      style={{
        ...defaultStyles,
        ...style,
      }}
    >
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <p className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
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
