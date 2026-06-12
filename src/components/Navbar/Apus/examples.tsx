import { FiBarChart2, FiCalendar, FiDollarSign, FiUsers } from 'react-icons/fi'
import type { NavbarApusModule } from './types'

export const modulesExamples: NavbarApusModule[] = [
  {
    key: 'dashboard',
    label: 'dashboard',
    icon: <FiBarChart2 />,
  },
  {
    key: 'appointments',
    label: 'citas',
    icon: <FiCalendar />,
  },
  {
    key: 'patients',
    label: 'pacientes',
    icon: <FiUsers />,
  },
  {
    key: 'finance',
    label: 'finanzas',
    icon: <FiDollarSign />,
  },
]
