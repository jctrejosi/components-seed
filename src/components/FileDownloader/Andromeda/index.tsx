import { filesExample } from './examples'
import styles from './styles.module.css'
import type { FileDownloaderAndromedaProps } from './types'
import { FiFileText } from 'react-icons/fi'

export const FileDownloaderAndromeda = ({
  files = filesExample,
  position = 'bottom-left',
  layout = 'horizontal',
  offset = { x: 0, y: 0 },
  defaultIcon,
  title = 'Certificados',
  style,
  className = 'file-downloader-andromeda',
}: FileDownloaderAndromedaProps) => {
  const handleDownload = (url: string, name?: string) => {
    const link = document.createElement('a')
    link.href = url
    link.download = name || 'download'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const fallbackIcon = defaultIcon ?? <FiFileText />

  return (
    <div
      className={`${styles.floating} ${styles[position]} ${styles[layout]} ${className}`}
      style={{
        ...style,
        ['--offset-x' as keyof React.CSSProperties]: `${offset.x}px`,
        ['--offset-y' as keyof React.CSSProperties]: `${offset.y}px`,
      }}
    >
      <span className={styles.title}>{title}</span>
      {files.map((file, i) => (
        <button
          key={i}
          className={styles.item}
          onClick={() => handleDownload(file.url, file.name)}
        >
          <span className={styles.icon}>{file.icon ?? fallbackIcon}</span>

          <span className={styles.label}>{file.label || file.name}</span>
        </button>
      ))}
    </div>
  )
}
