import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAntliaProps, WorkSectionAntliaItem } from './types'
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa'

const exampleItems: WorkSectionAntliaItem[] = [
  {
    icon: FaCode,
    title: 'Desarrollo de software',
    description: 'Programación funcional y orientada a objetos.',
  },
  {
    icon: FaReact,
    title: 'Desarrollo web',
    subtitle: 'React, Next.js',
    description: 'UI/UX con React y Next.js.',
  },
  {
    icon: FaMobileAlt,
    title: 'Desarrollo móvil',
    subtitle: 'Flutter · Android · iOS',
    description: 'Aplicaciones móviles multiplataforma con Flutter.',
  },
]

export const WorkSectionAntlia = ({
  translations = translationsSources,
  className = 'WorkSectionAntlia',
  items = exampleItems,
  style,
}: WorkSectionAntliaProps) => {
  return (
    <section className={`${styles.section} ${className}`} style={style}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <h3 className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </h3>

      <div className={styles.grid}>
        {items?.map((item, index) => {
          const Icon = item.icon

          return (
            <div key={index} className={styles.card}>
              <div className={styles.titleContainer}>
                <Icon className={styles.icon} />

                <h3 className={styles.cardTitle}>{item.title}</h3>
              </div>

              {item.subtitle && (
                <span className={styles.cardSubtitle}>{item.subtitle}</span>
              )}

              <p className={styles.description}>{item.description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
