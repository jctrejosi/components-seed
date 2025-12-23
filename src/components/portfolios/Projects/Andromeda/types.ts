export interface WorkProjectItem {
  name: string
  type: string
  image: string
  url: string
}

export interface WorkSectionProjectsProps {
  items?: WorkProjectItem[]
  translations: {
    title: Record<string, string>
  }
  className?: string
}
