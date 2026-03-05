import styles from './styles.module.css'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'
import type { IntroductionSectionAntliaProps } from './types'

export const IntroductionSectionAntlia = ({
  image,
  onCtaClick,
  style,
}: IntroductionSectionAntliaProps) => {
  return (
    <div className={styles.container} style={style}>
      <section className={styles.content}>
        <div className={styles.specialistInfo}>
          <h2 className={styles.specialistName}>
            {returnTranslation(translationsSources.specialist_name)}
          </h2>
          <p className={styles.specialistDescription}>
            {returnTranslation(translationsSources.specialist_description)}
          </p>
          <div className={styles.statistics}>
            <div className={styles.statisticItem}>
              <p className={styles.statisticValue}>
                {returnTranslation(translationsSources.smiles_designed_value)}
              </p>
              <p className={styles.statisticLabel}>
                {returnTranslation(translationsSources.smiles_designed)}
              </p>
            </div>
            <div className={styles.statisticItem}>
              <p className={styles.statisticValue}>
                {returnTranslation(translationsSources.satisfied_clients_value)}
              </p>
              <p className={styles.statisticLabel}>
                {returnTranslation(translationsSources.satisfied_clients)}
              </p>
            </div>
          </div>
          <button
            className={styles.ctaButton}
            onClick={onCtaClick}
            aria-label={returnTranslation(translationsSources.cta_button)}
          >
            {returnTranslation(translationsSources.cta_button)}
          </button>
        </div>
        <div className={styles.imageContainer}>
          <img
            src={image}
            alt={returnTranslation(translationsSources.specialist_name)}
            className={styles.specialistImage}
          />
        </div>
      </section>
    </div>
  )
}
