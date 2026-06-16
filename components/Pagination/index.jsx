import { Icon } from '@iconify/react';
import Link from 'next/link';

export default function Pagination({ currentPage, totalPages, basePath = '/blog' }) {
  const getHref = (page) => `${basePath}?page=${page}`;

  const getPageNumbers = () => {
    const pages = [];
    const delta = 2;
    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        pages.push(i);
      }
    }
    const result = [];
    let prev = null;
    for (const page of pages) {
      if (prev && page - prev > 1) result.push('...');
      result.push(page);
      prev = page;
    }
    return result;
  };

  if (totalPages <= 1) return null;

  return (
    <ul className="cs-pagination_box cs-center cs-white_color cs-mp0 cs-semi_bold">
      {currentPage > 1 && (
        <li>
          <Link href={getHref(currentPage - 1)} className="cs-pagination_item cs-center">
            <Icon icon="akar-icons:chevron-left" />
          </Link>
        </li>
      )}
      {getPageNumbers().map((page, index) =>
        page === '...' ? (
          <li key={`ellipsis-${index}`}>
            <span className="cs-pagination_item cs-center">…</span>
          </li>
        ) : (
          <li key={page}>
            <Link
              href={getHref(page)}
              className={`cs-pagination_item cs-center${page === currentPage ? ' active' : ''}`}
            >
              {page}
            </Link>
          </li>
        )
      )}
      {currentPage < totalPages && (
        <li>
          <Link href={getHref(currentPage + 1)} className="cs-pagination_item cs-center">
            <Icon icon="akar-icons:chevron-right" />
          </Link>
        </li>
      )}
    </ul>
  );
}
