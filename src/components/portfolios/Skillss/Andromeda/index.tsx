import { itemsExample } from './examples'
import styles from './styles.module.css'
import type { SkillSectionProps } from './types'

export const SkillsAndromeda = ({
  items = itemsExample,
  className = 'SkillSection',
}: SkillSectionProps) => {
  return (
    <div className={`${styles.container} ${className}`}>
      {items.map((section) => (
        <section className={styles.section}>
          <header className={styles.header}>
            {section.icon && <section.icon className={styles.icon} />}
            <h3 className={styles.title}>{section.title}</h3>
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
  )
}
