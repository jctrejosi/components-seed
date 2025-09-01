import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import type { ScrollSnapAndromedaProps } from './types'

export const ScrollSnapAndromeda = ({
  sections = [],
  style,
}: ScrollSnapAndromedaProps) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute('data-index'))
            setActiveIndex(index)
          }
        })
      },
      {
        root: containerRef.current,
        threshold: 0.5,
      }
    )

    const sections = containerRef.current?.children ?? []
    Array.from(sections).forEach((child) => observer.observe(child))

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (index: number) => {
    const section = containerRef.current?.children[index]
    section?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div
      className={styles.wrapper}
      style={{
        ...style,
      }}
    >
      <div ref={containerRef} className={styles.container}>
        {sections.map((child, i) => (
          <div
            key={i}
            data-index={i}
            className={styles.section}
            style={{
              backgroundColor: child.backgroundColor || 'var(--bg-base)',
            }}
          >
            {child.component}
          </div>
        ))}
      </div>

      <div className={styles.dots}>
        {sections.map((child, i) => (
          <div
            key={i}
            onClick={() => scrollToSection(i)}
            className={`${styles.dot} ${i === activeIndex ? styles.dotActive : ''}`}
            style={
              {
                '--dot-active-color': child.dotColor,
              } as React.CSSProperties
            }
          >
            {child.dotLabel || ''}
          </div>
        ))}
      </div>
    </div>
  )
}
