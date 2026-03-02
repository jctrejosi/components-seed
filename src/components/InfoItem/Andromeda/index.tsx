import styles from './styles.module.css'
import type { InfoItemAndromedaProps } from './types'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'
import { CarouselAndromeda } from '@/components/ui/Carousel/Andromeda'
import { exampleItems } from './examples'

export const InfoItemAndromeda = (props: InfoItemAndromedaProps) => {
  const { items = exampleItems } = props

  return (
    <div>
      {items.map((item, index) => {
        const isImageOnLeft = index % 2 !== 0

        return (
          <div
            key={index}
            className={`${styles.itemContainer} ${
              isImageOnLeft ? styles.imageOnLeft : styles.imageOnRight
            }`}
          >
            <div className={styles.content}>
              <h3 className={styles.title}>{item.title}</h3>
              <h4 className={styles.subtitle}>{item.subtitle}</h4>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.price}>{item.price}</p>
              <button
                className={styles.quoteButton}
                onClick={item.onButtonClick}
              >
                {item.buttonText ||
                  returnTranslation(
                    translationsSources.before_after_quote_button
                  )}
              </button>
            </div>

            <div className={styles.carouselContainer}>
              <CarouselAndromeda
                items={[
                  {
                    component: (
                      <img
                        src={item.beforeImageUrl}
                        alt="Before"
                        className={styles.carouselImage}
                      />
                    ),
                  },
                  {
                    component: (
                      <img
                        src={item.afterImageUrl}
                        alt="After"
                        className={styles.carouselImage}
                      />
                    ),
                  },
                ]}
                showArrows={true}
                showDots={true}
                itemsPerView={{ mobile: 1, tablet: 1, desktop: 1 }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
