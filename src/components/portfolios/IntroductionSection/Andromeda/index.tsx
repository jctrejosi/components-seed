import styles from './styles.module.css'
import { FaTwitter, FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'

export const IntroductionSectionAndromeda = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Hi there!</h1>
      <p className={styles.paragraph}>
        I'm <span className={styles.highlight}>Juan Trejos</span>, a developer focused on building
        clean, scalable web apps. I enjoy simplifying technical challenges and making technology
        accessible to everyone.
        <br />
        This website is my digital garden — where I share my journey, knowledge, and ideas.
      </p>

      <div className={styles.social}>
        <span>Find me on</span>
        <div className={styles.icons}>
          <a href="https://twitter.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaTwitter />
          </a>
          <a href="https://github.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://instagram.com/tuusuario" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a
            href="https://www.linkedin.com/in/juan-carlos-trejos-26605b142/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:jctrejosi@unal.edu.co">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </section>
  )
}
