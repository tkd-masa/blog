import styles from 'styles/two-column.module.css'
import { ReactNode } from 'react'

export const TwoColumn = ({ children }: { children: ReactNode }) => {
  return <div className={styles.flexContainer}>{children}</div>
}

export const TwoColumnMain = ({ children }: { children: ReactNode }) => {
  return <div className={styles.main}>{children}</div>
}

export const TwoColumnSidebar = ({ children }: { children: ReactNode }) => {
  return <div className={styles.sidebar}>{children}</div>
}
