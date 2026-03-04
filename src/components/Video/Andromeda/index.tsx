import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import type { VideoAndromedaProps } from './types'

export const VideoAndromeda = ({
  src,
  poster,
  delay = 300,
  className = '',
  style,
}: VideoAndromedaProps) => {
  const [loadVideo, setLoadVideo] = useState(false)

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoadVideo(true)
      }, delay)
    }

    if (document.readyState === 'complete') {
      handleLoad()
    } else {
      window.addEventListener('load', handleLoad)
      return () => window.removeEventListener('load', handleLoad)
    }
  }, [])

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      {!loadVideo && poster && (
        <img src={poster} alt="hero" className={styles.poster} />
      )}

      {loadVideo && (
        <video
          className={styles.video}
          src={src}
          autoPlay
          muted
          loop
          playsInline
          preload="none"
        />
      )}
    </div>
  )
}
