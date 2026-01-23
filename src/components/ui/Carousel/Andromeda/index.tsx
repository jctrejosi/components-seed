import { useEffect, useRef, useState } from 'react'
import styles from './styles.module.css'
import type { CarouselAndromedaProps, CarouselItemsPerView } from './types'

const resolveItemsPerView = (value: CarouselItemsPerView): number => {
  if (typeof value === 'number') return value

  const width = window.innerWidth

  if (width <= 768) return value.mobile ?? 1
  if (width <= 1024) return value.tablet ?? value.desktop ?? 1

  return value.desktop ?? 1
}

export const CarouselAndromeda = ({
  items = [],
  showArrows = true,
  showDots = true,
  gap = 16,
  autoplay = true,
  autoplayInterval = 4000,
  pauseOnHover = true,
  itemsPerView = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  },
  style,
}: CarouselAndromedaProps) => {
  const trackRef = useRef<HTMLDivElement>(null)
  const autoplayRef = useRef<number | null>(null)
  const activePageRef = useRef(0)

  const [resolvedItemsPerView, setResolvedItemsPerView] = useState(1)
  const [activePage, setActivePage] = useState(0)

  const totalPages = Math.max(1, Math.ceil(items.length / resolvedItemsPerView))

  const getActivePage = () => {
    const container = trackRef.current
    if (!container) return 0

    const slides = Array.from(
      container.querySelectorAll<HTMLElement>(`.${styles.slide}`)
    )

    const scrollLeft = container.scrollLeft

    const firstVisibleIndex = slides.findIndex(
      (slide) => slide.offsetLeft + slide.offsetWidth > scrollLeft + 1
    )

    if (firstVisibleIndex === -1) return 0

    return Math.min(
      totalPages - 1,
      Math.floor(firstVisibleIndex / resolvedItemsPerView)
    )
  }

  const scrollToPage = (page: number) => {
    const container = trackRef.current
    if (!container) return

    const slides = container.querySelectorAll<HTMLElement>(`.${styles.slide}`)
    const firstIndex = page * resolvedItemsPerView
    const target = slides[firstIndex]

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  const next = () => {
    const nextPage = (activePageRef.current + 1) % totalPages
    activePageRef.current = nextPage
    setActivePage(nextPage)
    scrollToPage(nextPage)
  }

  const prev = () => {
    const nextPage = (activePageRef.current - 1 + totalPages) % totalPages
    activePageRef.current = nextPage
    setActivePage(nextPage)
    scrollToPage(nextPage)
  }

  const handleMouseEnter = () => {
    if (pauseOnHover && autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay && totalPages > 1) {
      autoplayRef.current = window.setInterval(next, autoplayInterval)
    }
  }

  /* resolve responsive itemsPerView */
  useEffect(() => {
    const value = resolveItemsPerView(itemsPerView)
    setResolvedItemsPerView((prev) => (prev === value ? prev : value))
  }, [itemsPerView])

  /* scroll -> active page */
  useEffect(() => {
    const container = trackRef.current
    if (!container) return

    const onScroll = () => {
      const page = getActivePage()
      setActivePage((prev) => (prev === page ? prev : page))
      console.log('Se ejecutó el resolvedItemsPerView', page)
    }

    container.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onScroll)
    onScroll()

    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [resolvedItemsPerView])

  /* autoplay */
  useEffect(() => {
    if (!autoplay || totalPages <= 1) return

    autoplayRef.current = window.setInterval(next, autoplayInterval)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay, autoplayInterval, totalPages])

  useEffect(() => {
    activePageRef.current = activePage
  }, [activePage])

  return (
    <div
      className={styles.wrapper}
      style={{
        ...style,
        ['--items-per-view' as any]: resolvedItemsPerView,
        ['--carousel-gap' as any]: `${gap}px`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div ref={trackRef} className={styles.track}>
        {items.map((item, i) => (
          <div key={i} className={styles.slide}>
            {item.component}
          </div>
        ))}
      </div>

      {showArrows && totalPages > 1 && (
        <>
          <button className={styles.arrowLeft} onClick={prev}>
            ‹
          </button>
          <button className={styles.arrowRight} onClick={next}>
            ›
          </button>
        </>
      )}

      {showDots && totalPages > 1 && (
        <div className={styles.dots}>
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              className={`${styles.dot} ${
                i === activePage ? styles.dotActive : ''
              }`}
              onClick={() => scrollToPage(i)}
            />
          ))}
        </div>
      )}
    </div>
  )
}
