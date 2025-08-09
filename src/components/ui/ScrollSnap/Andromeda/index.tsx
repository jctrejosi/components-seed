import { useEffect, useRef, useState } from 'react'

import styles from './styles.module.css'
import type { ScrollSnapAndromedaProps } from './types'

const defaultStyle = {
  '--dot-base-color': 'var(--dot-color)',
  '--dot-base-active-color': 'var(--dot-active-color)',
  '--bg-base': 'var(--bg-primary)',
} as React.CSSProperties

export const ScrollSnapAndromeda = ({
  sections,
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
        ...defaultStyle,
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
          >
            {child.dotLabel || ''}
          </div>
        ))}
      </div>
    </div>
  )
}
