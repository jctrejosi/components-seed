import { useState } from 'react'
import { FaPaperPlane } from 'react-icons/fa'
import styles from './styles.module.css'
import type { ContactItem, ContactFormAntliaProps } from './types'
import { returnTranslation } from '@/utils'
import { translationsSoruces } from './translations'
import { contactItemsExample } from './example'

export const ContactFormAntlia = ({
  items = contactItemsExample,
  translations = translationsSoruces,
  idForm = '',
  style,
  className = '',
}: ContactFormAntliaProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')

    const formData = new FormData()
    formData.append('name', name)
    formData.append('email', email)
    formData.append('project', project)

    try {
      const res = await fetch(`https://formspree.io/f/${idForm}`, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      })

      if (res.ok) {
        setStatus('success')
        setName('')
        setEmail('')
        setProject('')
      } else {
        setStatus('error')
      }
    } catch (err) {
      setStatus('error')
    }
  }

  const getMessage = () => {
    switch (status) {
      case 'sending':
        return 'Enviando mensaje…'
      case 'success':
        return '¡Mensaje enviado con éxito!'
      case 'error':
        return 'Error al enviar, intenta de nuevo.'
      default:
        return ''
    }
  }

  return (
    <section className={`${styles.container} ${className}`} style={style}>
      <div className={styles.inner}>
        <div className={styles.leftColumn}>
          {items.map((item: ContactItem) => (
            <a
              key={item.key}
              href={item.url}
              className={styles.contactCard}
              target={item.targetBlank ? '_blank' : '_self'}
              rel={item.targetBlank ? 'noopener noreferrer' : undefined}
            >
              <div className={styles.iconWrap}>
                <span className={styles.icon}>{item.icon}</span>
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardTitle}>{item.title}</div>
                <div className={styles.cardSubtitle}>{item.subtitle}</div>
                <div className={styles.cardAction}>{item.actionText}</div>
              </div>
            </a>
          ))}
        </div>

        <div className={styles.rightColumn}>
          <h3 className={styles.formTitle}>
            {returnTranslation(translations.title)}
          </h3>

          <form className={styles.form} onSubmit={handleSubmit}>
            <label className={styles.formGroup}>
              <span className={styles.label}>Nombre</span>
              <input
                className={styles.input}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Ingresa tu nombre"
                required
              />
            </label>

            <label className={styles.formGroup}>
              <span className={styles.label}>Email</span>
              <input
                className={styles.input}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Ingresa tu email"
                required
              />
            </label>

            <label className={styles.formGroup}>
              <span className={styles.label}>Proyecto</span>
              <textarea
                className={styles.textarea}
                value={project}
                onChange={(e) => setProject(e.target.value)}
                placeholder="Escribe tu proyecto"
                rows={6}
                required
              />
            </label>

            <button
              className={styles.submitButton}
              type="submit"
              disabled={status === 'sending'}
            >
              <FaPaperPlane className={styles.buttonIcon} />
              <span>Enviar Mensaje</span>
            </button>

            {/* aviso flotante / mensaje */}
            {status !== 'idle' && (
              <div
                className={`${styles.formStatus} ${
                  status === 'success'
                    ? styles.success
                    : status === 'error'
                    ? styles.error
                    : styles.sending
                }`}
              >
                {getMessage()}
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
