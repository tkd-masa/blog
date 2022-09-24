import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { range } from 'lib/range'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

export const PaginationBySlug = ({ prevText = '', prevUrl = '', nextText = '', nextUrl = '' }): JSX.Element => {
  return (
    <ul className={styles.flexContainer}>
      {prevText !== undefined && prevUrl && (
        <li className={styles.prev}>
          <Link href={prevUrl}>
            <a className={styles.iconText}>
              <FontAwesomeIcon icon={faChevronLeft} />
              <span>{prevText}</span>
            </a>
          </Link>
        </li>
      )}
      {nextText !== undefined && nextUrl && (
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

export const PaginationById = ({
  totalCount,
  perPage,
  currentPage,
  catSlug,
}: {
  totalCount: number
  perPage: number
  currentPage: number
  catSlug?: string
}): JSX.Element => {
  const totalPageCount = Math.ceil(totalCount / perPage)
  const getPath = (p: number): string => {
    if (catSlug !== undefined) return `/category/${catSlug}/page/${p}`
    return `/page/${p}`
  }
  return (
    <ul className={`${styles.flexContainer} ${styles.id}`}>
      {currentPage > 1 && (
        <li className={styles.page}>
          <Link href={getPath(currentPage - 1)}>
            <a>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </Link>
        </li>
      )}
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index} className={number === currentPage ? `${styles.page} ${styles.active}` : styles.page}>
          <Link href={getPath(number)}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
      {currentPage !== totalPageCount && (
        <li className={styles.page}>
          <Link href={getPath(currentPage + 1)}>
            <a>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
