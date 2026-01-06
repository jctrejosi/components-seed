import { FaCode, FaServer, FaDatabase, FaDocker, FaTools } from 'react-icons/fa'

export const itemsExample = [
  {
    title: 'frontend',
    items: [
      { label: 'React', value: 90 },
      { label: 'TypeScript', value: 90 },
      { label: 'JavaScript', value: 85 },
      { label: 'HTML5', value: 95 },
      { label: 'CSS / Tailwind', value: 90 },
    ],
    icons: FaCode,
  },
  {
    title: 'backend',
    items: [
      { label: 'Node.js', value: 85 },
      { label: 'Python', value: 80 },
      { label: 'Django', value: 75 },
      { label: 'Flask', value: 80 },
      { label: 'REST APIs', value: 85 },
    ],
    icons: FaServer,
  },
  {
    title: 'databases',
    items: [
      { label: 'PostgreSQL', value: 80 },
      { label: 'MongoDB', value: 75 },
    ],
    icons: FaDatabase,
  },
  {
    title: 'devops',
    items: [
      { label: 'Docker', value: 80 },
      { label: 'Linux', value: 85 },
      { label: 'CI/CD', value: 70 },
    ],
    icons: FaDocker,
  },
  {
    title: 'tools',
    items: [
      { label: 'Git', value: 90 },
      { label: 'Webpack', value: 75 },
      { label: 'Jest', value: 70 },
    ],
    icons: FaTools,
  },
]
