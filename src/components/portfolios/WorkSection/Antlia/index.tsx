import { returnTranslation } from '@/utils'
import styles from './styles.module.css'
import { translationsSources } from './translations'
import type { WorkSectionAntliaProps, WorkSectionAntliaItem } from './types'
import { FaCode, FaReact, FaMobileAlt } from 'react-icons/fa'

export const expertiseItems: WorkSectionAntliaItem[] = [
  {
    icon: FaCode,
    title: {
      es: 'Desarrollo de software',
      en: 'Software development',
      pt: 'Desenvolvimento de software',
    },
    description: {
      es: 'Experiencia en programación funcional y orientada a objetos: Dart, Python, Java, JavaScript y TypeScript.',
      en: 'Experienced in both functional and object-oriented programming: Dart, Python, Java, JavaScript and TypeScript.',
      pt: 'Experiência em programação funcional e orientada a objetos: Dart, Python, Java, JavaScript e TypeScript.',
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
      es: 'Enfocado en UI/UX. Más de 5 años de experiencia con HTML, CSS, JavaScript, React y Next.js.',
      en: 'Focused on UI/UX. Over 5 years of experience with HTML, CSS, JavaScript, React and Next.js.',
      pt: 'Foco em UI/UX. Mais de 5 anos de experiência com HTML, CSS, JavaScript, React e Next.js.',
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
      es: 'Desarrollo de aplicaciones móviles híbridas y soluciones multiplataforma usando Flutter.',
      en: 'Development of hybrid mobile applications and cross-platform solutions using Flutter.',
      pt: 'Desenvolvimento de aplicações móveis híbridas e soluções multiplataforma usando Flutter.',
    },
  },
]

export const WorkSectionAntlia = ({
  translations = translationsSources,
  className = 'WorkSectionAntlia',
  items = expertiseItems,
}: WorkSectionAntliaProps) => {
  return (
    <section className={`${styles.section} ${className}`}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>

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
