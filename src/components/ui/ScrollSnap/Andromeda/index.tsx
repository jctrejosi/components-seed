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
  const isMobile = window.innerWidth <= 1024

  const handleScroll = () => {
    const children = containerRef.current?.children ?? []
    let newIndex = 0

    Array.from(children).forEach((child, i) => {
      const rect = child as HTMLElement
      const box = rect.getBoundingClientRect()
      const viewportMid = window.innerHeight / 2

      if (box.top <= viewportMid && box.bottom >= viewportMid) {
        newIndex = i
      }
    })

    setActiveIndex(newIndex)
  }

  if (isMobile) {
    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
  } else {
    containerRef.current?.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
  }

  handleScroll() // inicializa el estado

  return () => {
    if (isMobile) {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    } else {
      containerRef.current?.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }
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
                '--dot-color-active': child.dotColor,
              } as React.CSSProperties
            }
          >
            <span className={styles.dotLabel}>{child.dotLabel || ''}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
