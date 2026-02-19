import type { FileItemAndromeda } from './types'
import { FiFileText, FiImage, FiArchive } from 'react-icons/fi'

export const filesExample: FileItemAndromeda[] = [
  {
    url: '/files/juan-trejos-cv.pdf',
    name: 'Juan_Trejos_CV.pdf',
    label: 'CV',
    icon: <FiFileText />,
  },
  {
    url: '/files/portfolio-frontend.pdf',
    name: 'Portfolio_Frontend.pdf',
    label: 'Portafolio',
    icon: <FiFileText />,
  },
  {
    url: '/files/design-assets.zip',
    name: 'Design_Assets.zip',
    label: 'Assets',
    icon: <FiArchive />,
  },
  {
    url: '/files/profile-photo.png',
    name: 'Profile_Photo.png',
    label: 'Foto',
    icon: <FiImage />,
  },
]
