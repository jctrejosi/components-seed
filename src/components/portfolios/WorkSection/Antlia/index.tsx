import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAntliaProps, WorkSectionAntliaItem } from './types'
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa'

export const exampleItems: WorkSectionAntliaItem[] = [
  {
    icon: FaCode,
    title: {
      es: 'Desarrollo de software',
      en: 'Software development',
      pt: 'Desenvolvimento de software',
    },
    description: {
      es: 'Programación funcional y orientada a objetos.',
      en: 'Functional and object-oriented programming.',
      pt: 'Programação funcional e orientada a objetos.',
    },
  },
  {
    icon: FaReact,
    title: {
      es: 'Desarrollo frontend',
      en: 'Frontend development',
      pt: 'Desenvolvimento frontend',
    },
    subtitle: {
      es: 'React, Next.js',
      en: 'React, Next.js',
      pt: 'React, Next.js',
    },
    description: {
      es: 'UI/UX con React y Next.js.',
      en: 'UI/UX with React and Next.js.',
      pt: 'UI/UX com React e Next.js.',
    },
  },
  {
    icon: FaMobileAlt,
    title: {
      es: 'Desarrollo móvil',
      en: 'Mobile development',
      pt: 'Desenvolvimento mobile',
    },
    subtitle: {
      es: 'Flutter · Android · iOS',
      en: 'Flutter · Android · iOS',
      pt: 'Flutter · Android · iOS',
    },
    description: {
      es: 'Aplicaciones móviles multiplataforma con Flutter.',
      en: 'Cross-platform mobile apps with Flutter.',
      pt: 'Aplicações móveis multiplataforma com Flutter.',
    },
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

                <h3 className={styles.cardTitle}>
                  {returnTranslation(item.title)}
                </h3>
              </div>

              {item.subtitle && (
                <span className={styles.cardSubtitle}>
                  {returnTranslation(item.subtitle)}
                </span>
              )}

              <p className={styles.description}>
                {returnTranslation(item.description)}
              </p>
            </div>
          )
        })}
      </div>
    </section>
  )
}
