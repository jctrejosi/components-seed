import React, { useState } from 'react'
import {
  FaPhoneAlt,
  FaEnvelope,
  FaWhatsapp,
  FaPaperPlane,
} from 'react-icons/fa'
import styles from './styles.module.css'
import type { ContactItem, ContactFormAntliaProps } from './types'
import { returnTranslation } from '@/utils'
import { translationsSoruces } from './translations'

export const contactItems = [
  {
    key: 'phone',
    type: 'phone' as const,
    title: 'Teléfono',
    subtitle: '+1 234 567 890',
    actionText: 'Llamar →',
    url: 'tel:+1234567890',
    icon: <FaPhoneAlt />,
    targetBlank: false,
  },
  {
    key: 'email',
    type: 'email' as const,
    title: 'Email',
    subtitle: 'alex@ejemplo.com',
    actionText: 'Escribir →',
    url: 'mailto:alex@ejemplo.com',
    icon: <FaEnvelope />,
    targetBlank: false,
  },
  {
    key: 'whatsapp',
    type: 'whatsapp' as const,
    title: 'WhatsApp',
    subtitle: '+1 234 567 890',
    actionText: 'Escribir →',
    // formato estándar para wa.me: https://wa.me/<number>?text=<mensaje>
    url: 'https://wa.me/1234567890?text=Hola%2C%20quiero%20hablar%20de%20un%20proyecto',
    icon: <FaWhatsapp />,
    targetBlank: true,
  },
]

export const ContactFormAntlia = ({
  items = contactItems,
  translations = translationsSoruces,
  style,
  className = '',
}: ContactFormAntliaProps) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [project, setProject] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // construye un mailto simple para enviar la info del formulario
    const subject = encodeURIComponent(`Contacto: ${name || 'Sin nombre'}`)
    const body = encodeURIComponent(
      `Nombre: ${name}\nEmail: ${email}\nProyecto:\n${project}`
    )
    window.location.href = `mailto:${items.find((i) => i.type === 'email')?.url?.replace('mailto:', '') || ''}?subject=${subject}&body=${body}`
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

            <button className={styles.submitButton} type="submit">
              <FaPaperPlane className={styles.buttonIcon} />
              <span>Enviar Mensaje</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
