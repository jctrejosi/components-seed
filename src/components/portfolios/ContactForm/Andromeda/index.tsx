import { useState } from 'react'
import { translationsSources } from './translations'
import styles from './styles.module.css'
import type { ContactFormAndromedaProps } from './types'
import { returnTranslation } from '@/utils'

export const ContactFormAndromeda = ({
  sendTo,
  translations = translationsSources,
  style,
}: ContactFormAndromedaProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    ;() => sendTo
    e.preventDefault()
  }

  return (
    <section className={styles.container} style={style}>
      <h2 className={styles.title}>{returnTranslation(translations.title)}</h2>
      <p className={styles.subtitle}>
        {returnTranslation(translations.subtitle)}
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">
              {returnTranslation(translations.label_name)}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder={returnTranslation(translations.placeholder_name)}
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">
              {returnTranslation(translations.label_email)}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder={returnTranslation(translations.placeholder_email)}
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">
            {returnTranslation(translations.label_message)}
          </label>
          <textarea
            id="message"
            name="message"
            placeholder={returnTranslation(translations.placeholder_message)}
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          {returnTranslation(translations.button)}
        </button>
      </form>
    </section>
  )
}
