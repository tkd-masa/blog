import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const PaginationBySlug = ({ prevText = '', prevUrl = '', nextText = '', nextUrl = '' }) => {
  return (
    <ul className={styles.flexContainer}>
      {prevText && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText && nextUrl && (
        <li className={styles.next}>
          <Link href={nextUrl}>
            <a className={styles.iconText}>
              <span>{nextText}</span>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}

export const PaginationById = ({ totalCount, PER_PAGE }: { totalCount: number; PER_PAGE: number }) => {
  const range = (start: number, end: number) => [...Array(end - start + 1)].map((_, i) => start + i)
  return (
    <ul>
      {range(1, Math.ceil(totalCount / PER_PAGE)).map((number, index) => (
        <li key={index}>
          <Link href={`/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
    </ul>
  )
}
