import styles from './styles.module.css'
import { FcGoogle } from 'react-icons/fc'
import { BsMicrosoft } from 'react-icons/bs'
import { FaApple } from 'react-icons/fa'
import type { LoginAndromedaProps } from './types'

export const LoginAndromeda = ({
  title = 'Iniciar sesión',
  subtitle = 'Accede a la plataforma administrativa',
  emailPlaceholder = 'Correo electrónico',
  passwordPlaceholder = 'Contraseña',
  loginButtonText = 'Iniciar sesión',
  showGoogle = true,
  showMicrosoft = true,
  showApple = false,
  onSubmit,
  onGoogleLogin,
  onMicrosoftLogin,
  onAppleLogin,
  className = 'login-andromeda',
  style,
}: LoginAndromedaProps) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    onSubmit?.({
      email: String(formData.get('email') ?? ''),
      password: String(formData.get('password') ?? ''),
    })
  }

  return (
    <div className={`${styles.container} ${className}`} style={style}>
      <form className={styles.card} onSubmit={handleSubmit}>
        <div className={styles.header}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Correo electrónico</label>

          <input
            className={styles.input}
            type="email"
            name="email"
            placeholder={emailPlaceholder}
            required
          />
        </div>

        <div className={styles.field}>
          <label className={styles.label}>Contraseña</label>

          <input
            className={styles.input}
            type="password"
            name="password"
            placeholder={passwordPlaceholder}
            required
          />
        </div>

        <button type="submit" className={styles.loginButton}>
          {loginButtonText}
        </button>

        {(showGoogle || showMicrosoft || showApple) && (
          <>
            <div className={styles.divider}>
              <span>o continuar con</span>
            </div>

            <div className={styles.providers}>
              {showGoogle && (
                <button
                  type="button"
                  className={styles.providerButton}
                  onClick={onGoogleLogin}
                >
                  <FcGoogle className={styles.providerIcon} />
                  <span>Continuar con Google</span>
                </button>
              )}

              {showMicrosoft && (
                <button
                  type="button"
                  className={styles.providerButton}
                  onClick={onMicrosoftLogin}
                >
                  <BsMicrosoft className={styles.providerIcon} />
                  <span>Continuar con Microsoft</span>
                </button>
              )}

              {showApple && (
                <button
                  type="button"
                  className={styles.providerButton}
                  onClick={onAppleLogin}
                >
                  <FaApple className={styles.providerIcon} />
                  <span>Continuar con Apple</span>
                </button>
              )}
            </div>
          </>
        )}
      </form>
    </div>
  )
}
