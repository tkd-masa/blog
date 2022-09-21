import styles from 'styles/pagination.module.css'
import Link from 'next/link'
import { range } from 'lib/range'
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

export const PaginationById = ({
  totalCount,
  perPage,
  currentPage,
  cat,
}: {
  totalCount: number
  perPage: number
  currentPage: number
  cat?: string
}) => {
  const totalPageCount = Math.ceil(totalCount / perPage)

  return (
    <ul className={`${styles.flexContainer} ${styles.id}`}>
      {currentPage > 1 && (
        <li>
          <Link href={cat ? `/category/${cat}/page/${currentPage - 1}` : `/page/${currentPage - 1}`}>
            <a>
              <FontAwesomeIcon icon={faChevronLeft} />
            </a>
          </Link>
        </li>
      )}
      {range(1, Math.ceil(totalCount / perPage)).map((number, index) => (
        <li key={index} className={number === currentPage ? `${styles.list} ${styles.active}` : styles.list}>
          <Link href={cat ? `/category/${cat}/page/${number}` : `/page/${number}`}>
            <a>{number}</a>
          </Link>
        </li>
      ))}
      {currentPage != totalPageCount && (
        <li>
          <Link href={cat ? `/category/${cat}/page/${currentPage + 1}` : `/page/${currentPage + 1}`}>
            <a>
              <FontAwesomeIcon icon={faChevronRight} />
            </a>
          </Link>
        </li>
      )}
    </ul>
  )
}
