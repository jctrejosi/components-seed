import { FaPhoneAlt, FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export const contactItemsExample = [
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
