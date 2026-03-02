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

    const handleScroll = (e?: Event) => {
      const container = containerRef.current
      if (!container) return

      // si el evento existe y no viene del contenedor snap, ignorar
      if (e && e.target !== container && e.target !== window) return

      const children = container.children
      let newIndex = 0

      for (let i = 0; i < children.length; i++) {
        const rect = (children[i] as HTMLElement).getBoundingClientRect()
        const viewportMid = window.innerHeight / 2
        if (rect.top <= viewportMid && rect.bottom >= viewportMid) {
          newIndex = i
          break
        }
      }

      setActiveIndex((prev) => (prev === newIndex ? prev : newIndex))
    }

    if (isMobile) {
      window.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
    } else {
      containerRef.current?.addEventListener('scroll', handleScroll)
      window.addEventListener('resize', handleScroll)
    }

    handleScroll()

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
