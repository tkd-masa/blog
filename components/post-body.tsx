import styles from 'styles/post-body.module.css'
import { ReactNode } from 'react'

const PostBody = ({ children }: { children: ReactNode }): JSX.Element => {
  return <div className={styles.stack}>{children}</div>
}

export default PostBody
