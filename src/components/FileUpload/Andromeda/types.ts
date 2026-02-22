import type { BasePropComponents } from '@/types'

export interface FileUploadProps {
  onFileSelect: (file: File) => void
  className?: string
}

export interface RegressionLinealProps {
  onExecute: () => void
  dependentVariable: string
  className?: string
}

export interface FileUploadPropsAndromeda extends BasePropComponents {
  fileUploadProps: FileUploadProps
  regressionLinealProps: RegressionLinealProps
}
