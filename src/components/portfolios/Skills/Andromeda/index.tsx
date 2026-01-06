import { returnTranslation } from '@/utils'
import { itemsExample } from './examples'
import styles from './styles.module.css'
import type { SkillSectionProps } from './types'
import { translationsSources } from './translations'

export const SkillsAndromeda = ({
  items = itemsExample,
  className = 'SkillSection',
  style,
  translations = translationsSources,
}: SkillSectionProps) => {
  return (
    <div className={styles.wrapper} style={style}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <h5 className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </h5>
      <div className={`${styles.container} ${className}`}>
        {items.map((section) => (
          <section className={styles.section}>
            <header className={styles.header}>
              {section.icon && <section.icon className={styles.icon} />}
              <h6 className={styles.itemTitle}>{section.title}</h6>
            </header>

            <div className={styles.list}>
              {section.items?.map((item, i) => (
                <div key={i} className={styles.item}>
                  <div className={styles.labelRow}>
                    <span>{item.label}</span>
                    <span className={styles.value}>{item.value}%</span>
                  </div>

                  <div className={styles.bar}>
                    <span
                      className={styles.fill}
                      style={{ width: `${item.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  )
}
