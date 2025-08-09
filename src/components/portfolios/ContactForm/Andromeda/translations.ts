import { type TranslationResourceT } from '@/utils/returnTranslations'

export const translationsSources: Record<string, TranslationResourceT> = {
  title: {
    es: '¡Envíame un mensaje!',
    en: 'Send me a message!',
    pt: 'Envie-me uma mensagem!',
  },
  subtitle: {
    es: '¿Tienes una pregunta o propuesta, o simplemente quieres saludar? Adelante.',
    en: 'Got a question or proposal, or just want to say hello? Go ahead.',
    pt: 'Tem uma pergunta ou proposta, ou só quer dizer olá? Vá em frente.',
  },
  label_name: {
    es: 'Tu nombre',
    en: 'Your Name',
    pt: 'Seu nome',
  },
  label_email: {
    es: 'Dirección de correo electrónico',
    en: 'Email Address',
    pt: 'Endereço de e-mail',
  },
  label_message: {
    es: 'Tu mensaje',
    en: 'Your Message',
    pt: 'Sua mensagem',
  },
  placeholder_name: {
    es: 'Ingresa tu nombre',
    en: 'Enter your name',
    pt: 'Digite seu nome',
  },
  placeholder_email: {
    es: 'Ingresa tu dirección de correo electrónico',
    en: 'Enter your email address',
    pt: 'Digite seu endereço de e-mail',
  },
  placeholder_message: {
    es: 'Hola, creo que necesitamos un sistema de diseño para nuestros productos en la empresa X...',
    en: 'Hi, I think we need a design system for our products at Company X...',
    pt: 'Oi, acho que precisamos de um sistema de design para nossos produtos na Empresa X...',
  },
  button: {
    es: 'ENVIAR →',
    en: 'SHOOT →',
    pt: 'ENVIAR →',
  },
}
