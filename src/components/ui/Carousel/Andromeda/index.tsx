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
  // referencia al contenedor que hace scroll (track del carousel)
  const trackRef = useRef<HTMLDivElement>(null)

  // referencia al interval del autoplay (para poder limpiarlo)
  const autoplayRef = useRef<number | null>(null)

  // fuente de verdad para autoplay (evita stale closures)
  const activePageRef = useRef(0)

  // número de items visibles según breakpoint
  const [resolvedItemsPerView, setResolvedItemsPerView] = useState(1)

  // página activa para render (dots, arrows, etc.)
  const [activePage, setActivePage] = useState(0)

  // total de páginas según items e itemsPerView
  const totalPages = Math.max(1, Math.ceil(items.length / resolvedItemsPerView))

  /**
   * calcula la página activa según el scroll real
   * se usa para sincronizar dots cuando el usuario scrollea
   */
  const getActivePage = () => {
    const container = trackRef.current
    if (!container) return 0

    // todas las slides del carousel
    const slides = Array.from(
      container.querySelectorAll<HTMLElement>(`.${styles.slide}`)
    )

    const scrollLeft = container.scrollLeft

    // primer slide visible en el viewport
    const firstVisibleIndex = slides.findIndex(
      (slide) => slide.offsetLeft + slide.offsetWidth > scrollLeft + 1
    )

    if (firstVisibleIndex === -1) return 0

    // se traduce el índice de slide a índice de página
    return Math.min(
      totalPages - 1,
      Math.floor(firstVisibleIndex / resolvedItemsPerView)
    )
  }

  /**
   * mueve el carousel a una página concreta
   * siempre se alinea al primer item de esa página
   */
  const scrollToPage = (page: number) => {
    const container = trackRef.current
    if (!container) return

    const slides = container.querySelectorAll<HTMLElement>(`.${styles.slide}`)

    // índice del primer slide de la página
    const firstIndex = page * resolvedItemsPerView
    const target = slides[firstIndex]

    if (!target) return

    target.scrollIntoView({
      behavior: 'smooth',
      inline: 'start',
      block: 'nearest',
    })
  }

  /**
   * avanza una página
   * usa activePageRef para evitar closures viejos en autoplay
   */
  const next = () => {
    const nextPage = (activePageRef.current + 1) % totalPages

    // se actualiza la ref (fuente de verdad)
    activePageRef.current = nextPage

    // se actualiza el estado para render
    setActivePage(nextPage)

    // se mueve el scroll
    scrollToPage(nextPage)
  }

  /**
   * retrocede una página
   * misma lógica que next pero hacia atrás
   */
  const prev = () => {
    const nextPage = (activePageRef.current - 1 + totalPages) % totalPages

    activePageRef.current = nextPage
    setActivePage(nextPage)
    scrollToPage(nextPage)
  }

  /**
   * pausa el autoplay al hacer hover
   */
  const handleMouseEnter = () => {
    if (pauseOnHover && autoplayRef.current) {
      clearInterval(autoplayRef.current)
      autoplayRef.current = null
    }
  }

  /**
   * reanuda el autoplay al salir del hover
   */
  const handleMouseLeave = () => {
    if (pauseOnHover && autoplay && totalPages > 1) {
      autoplayRef.current = window.setInterval(next, autoplayInterval)
    }
  }

  /**
   * resuelve itemsPerView según el tamaño de pantalla
   * solo actualiza el estado si realmente cambió
   */
  useEffect(() => {
    const value = resolveItemsPerView(itemsPerView)
    setResolvedItemsPerView((prev) => (prev === value ? prev : value))
  }, [itemsPerView])

  /**
   * sincroniza el estado activePage con el scroll real
   * permite que los dots reaccionen al scroll manual
   */
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

    // sincronización inicial
    onScroll()

    return () => {
      container.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [resolvedItemsPerView])

  /**
   * autoplay
   * usa next() que ya está blindado con activePageRef
   */
  useEffect(() => {
    if (!autoplay || totalPages <= 1) return

    autoplayRef.current = window.setInterval(next, autoplayInterval)

    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current)
    }
  }, [autoplay, autoplayInterval, totalPages])

  /**
   * mantiene la ref sincronizada con el estado
   * esto es lo que evita el bug del autoplay
   */
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
