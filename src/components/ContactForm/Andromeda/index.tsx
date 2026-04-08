import { useState } from 'react'
import { translationsSources } from './translations'
import styles from './styles.module.css'
import type { ContactFormAndromedaProps, ContactFormData } from './types'
import { returnTranslation } from '@/utils'

export const ContactFormAndromeda = ({
  sendTo = '',
  translations = translationsSources,
  style,
  backgroundImage,
  onSubmit,
  showName = true,
  showEmail = true,
  showPhone = true,
  showMessage = true,
}: ContactFormAndromedaProps) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: '',
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const payload: ContactFormData = {}

    if (showName && formData.name?.trim()) payload.name = formData.name.trim()
    if (showEmail && formData.email?.trim())
      payload.email = formData.email.trim()
    if (showPhone && formData.phone?.trim())
      payload.phone = formData.phone.trim()
    if (showMessage && formData.message?.trim())
      payload.message = formData.message.trim()

    onSubmit?.(payload)

    if (sendTo) {
      window.location.href = sendTo
    }
  }

  return (
    <div className={styles.container} style={style}>
      {backgroundImage && (
        <img className={styles.backgroundImage} src={backgroundImage} alt="" />
      )}

      <section className={styles.innerContainer}>
        <h2 className={styles.title}>
          {returnTranslation(translations.title)}
        </h2>

        <p className={styles.subtitle}>
          {returnTranslation(translations.subtitle)}
        </p>

        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.row}>
            {showName && (
              <div className={styles.field}>
                <label htmlFor="name">
                  {returnTranslation(translations.label_name)}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder={returnTranslation(translations.placeholder_name)}
                  value={formData.name ?? ''}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {showEmail && (
              <div className={styles.field}>
                <label htmlFor="email">
                  {returnTranslation(translations.label_email)}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder={returnTranslation(
                    translations.placeholder_email
                  )}
                  value={formData.email ?? ''}
                  onChange={handleChange}
                  required
                />
              </div>
            )}

            {showPhone && (
              <div className={styles.field}>
                <label htmlFor="phone">
                  {returnTranslation(translations.label_phone)}
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder={returnTranslation(
                    translations.placeholder_phone
                  )}
                  value={formData.phone ?? ''}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          {showMessage && (
            <div className={styles.field}>
              <label htmlFor="message">
                {returnTranslation(translations.label_message)}
              </label>
              <textarea
                id="message"
                name="message"
                placeholder={returnTranslation(
                  translations.placeholder_message
                )}
                value={formData.message ?? ''}
                onChange={handleChange}
                rows={5}
                required
              />
            </div>
          )}

          <button type="submit" className={styles.button}>
            {returnTranslation(translations.button)}
          </button>
        </form>
      </section>
    </div>
  )
}
