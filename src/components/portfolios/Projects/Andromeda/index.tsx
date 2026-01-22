import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import type { WorkSectionProjectsProps } from './types'
import { translationsSources } from './translations'
import { projectsExample } from './examples'
import { CarouselAndromeda } from '@/components/ui/Carousel/Andromeda'

export const ProjectsAndromeda = ({
  items = projectsExample,
  translations = translationsSources,
  className = '',
  style,
}: WorkSectionProjectsProps) => {
  return (
    <section className={`${styles.section} ${className}`} style={style}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>

      <h5 className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </h5>

      <CarouselAndromeda
        showArrows
        showDots
        items={items.map((item) => ({
          component: (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.imageWrapper}>
                <img
                  src={item.image}
                  alt={item.name}
                  className={styles.image}
                />
              </div>

              <div className={styles.info}>
                <strong className={styles.name}>{item.name}</strong>

                <span className={styles.type}>
                  <span className={styles.typeDefault}>{item.type}</span>
                  <span className={styles.typeHover}>
                    {returnTranslation(translations.show)} <span>→</span>
                  </span>
                </span>
              </div>

              {item.description && (
                <span className={styles.description}>{item.description}</span>
              )}
            </a>
          ),
        }))}
      />
    </section>
  )
}
