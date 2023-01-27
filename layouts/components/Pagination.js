import Link from "next/link";
import React from "react";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

const Pagination = ({ section, currentPage, totalPages }) => {
  const indexPageLink = currentPage === 2;
  const hasPrevPage = currentPage > 1;
  const hasNextPage = totalPages > currentPage;

  let pageList = [];
  for (let i = 1; i <= totalPages; i++) {
    pageList.push(i);
  }

  return (
    <>
      {totalPages > 1 && (
        <nav
          className="item-center mb-4 flex justify-center space-x-1 lg:space-x-2"
          aria-label="Pagination"
        >
          {/* previous */}
          {hasPrevPage ? (
            <Link
              href={
                indexPageLink
                  ? `${section ? "/" + section : "/"}`
                  : `${section ? "/" + section : ""}/page/${currentPage - 1}`
              }
              className="flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none text-dark dark:text-darkmode-light"
            >
              <>
                <BsArrowLeftShort />
                <span className="ml-3 text-lg ">Previous</span>
              </>
            </Link>
          ) : (
            <span className="flex items-center rounded-full px-2 py-1 text-3xl font-bold text-dark dark:text-darkmode-light ">
              <>
                <BsArrowLeftShort />
                <span className="ml-3 text-lg">Previous</span>
              </>
            </span>
          )}

          {/* page index */}
          {pageList.map((pagination, i) => (
            <React.Fragment key={`page-${i}`}>
              {pagination === currentPage ? (
                <span
                  aria-current="page"
                  className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-primary px-4 py-1 font-secondary text-lg font-bold leading-none text-dark text-white dark:text-darkmode-light`}
                >
                  {pagination}
                </span>
              ) : (
                <Link
                  href={
                    i === 0
                      ? `${section ? "/" + section : "/"}`
                      : `${section ? "/" + section : ""}/page/${pagination}`
                  }
                  passHref
                  aria-current="page"
                  className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full px-4 py-1 font-secondary text-lg font-bold leading-none text-dark dark:text-darkmode-light`}
                >
                  {pagination}
                </Link>
              )}
            </React.Fragment>
          ))}

          {/* next page */}
          {hasNextPage ? (
            <Link
              href={`${section ? "/" + section : ""}/page/${currentPage + 1}`}
              className="ml-4 flex items-center rounded-full px-2 py-1 text-3xl font-bold leading-none text-dark dark:text-darkmode-light"
            >
              <>
                <span className="mr-3 text-lg">Next</span>
                <BsArrowRightShort />
              </>
            </Link>
          ) : (
            <span className="ml-4 flex items-center rounded-full px-2 py-1 text-3xl font-bold text-dark dark:text-darkmode-light">
              <>
                <span className="mr-3 text-lg">Next</span>
                <BsArrowRightShort />
              </>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
