import styles from './styles.module.css'
import type { SocialLinksAndromedaProps, SocialLinkItem } from './types'
import { socialLinksExamples } from './example'

export const SocialLinksAndromeda = ({
  items = socialLinksExamples,
  className = '',
  style,
}: SocialLinksAndromedaProps) => {
  return (
    <div className={`${styles.wrapper} ${className}`} style={style}>
      {items.map((item: SocialLinkItem, index) => (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
          title={item.label || ''}
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}
