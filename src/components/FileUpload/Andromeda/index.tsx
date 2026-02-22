import styles from './styles.module.css'
import { translationsSources } from './translations'
import { returnTranslation } from '@/utils'
import type { FileUploadPropsAndromeda } from './types'

export const FileUploadAndromeda = (props: FileUploadPropsAndromeda) => {
  const {
    fileUploadProps = {
      onFileSelect: () => {},
      className: '',
    },
    regressionLinealProps = {
      onExecute: () => {},
      dependentVariable: '',
      className: '',
    },
  } = props

  return (
    <div className={styles.container}>
      <div className={styles.fileUpload}>
        <input
          type="file"
          onChange={(e) =>
            e.target.files && fileUploadProps.onFileSelect(e.target.files[0])
          }
          className={styles.fileInput}
          aria-label={returnTranslation(
            translationsSources.select_archive_file
          )}
        />
      </div>
      <div className={styles.regressionLineal}>
        <button
          onClick={regressionLinealProps.onExecute}
          className={styles.executeButton}
          aria-label={returnTranslation(
            translationsSources.execute_regression_lineal
          )}
        >
          {returnTranslation(translationsSources.execute_regression_lineal)}
        </button>
        <select
          className={styles.dependentVariableSelect}
          aria-label={returnTranslation(translationsSources.dependent_variable)}
        >
          <option value="variable1">
            {returnTranslation(translationsSources.dependent_variable)}
          </option>
          <option value="variable2">
            {returnTranslation(translationsSources.dependent_variable)}
          </option>
        </select>
      </div>
    </div>
  )
}
