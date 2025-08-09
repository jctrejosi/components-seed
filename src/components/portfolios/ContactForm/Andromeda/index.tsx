import { useState } from 'react'

import styles from './styles.module.css'

export const ContactFormAndromeda = () => {
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
    e.preventDefault()
    console.log(formData)
  }

  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Send me a message!</h2>
      <p className={styles.subtitle}>
        Got a question or proposal, or just want to say hello? Go ahead.
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className={styles.field}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Hi, I think we need a design system for our products at Company X..."
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
        </div>

        <button type="submit" className={styles.button}>
          SHOOT →
        </button>
      </form>
    </section>
  )
}
