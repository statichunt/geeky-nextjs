import Link from "next/link";
import React from "react";

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
          className="mb-4 flex justify-center space-x-1 lg:space-x-2"
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
              className="flex items-center rounded-full px-2 py-2 text-lg font-bold leading-none text-dark dark:text-darkmode-light"
            >
              <>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7071 7.70711C11.0976 7.31658 11.0976 6.68342 10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071C11.0976 17.3166 11.0976 16.6834 10.7071 16.2929L7.41422 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L10.7071 7.70711Z"
                    fill="currentColor"
                  />
                </svg>
                <span className="ml-3 text-lg ">Previous</span>
              </>
            </Link>
          ) : (
            <span className="flex items-center rounded-full px-2 py-2 text-lg font-bold text-dark dark:text-darkmode-light ">
              <>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.7071 7.70711C11.0976 7.31658 11.0976 6.68342 10.7071 6.29289C10.3166 5.90237 9.68342 5.90237 9.29289 6.29289L4.29289 11.2929C3.90237 11.6834 3.90237 12.3166 4.29289 12.7071L9.29289 17.7071C9.68342 18.0976 10.3166 18.0976 10.7071 17.7071C11.0976 17.3166 11.0976 16.6834 10.7071 16.2929L7.41422 13L19 13C19.5523 13 20 12.5523 20 12C20 11.4477 19.5523 11 19 11L7.41421 11L10.7071 7.70711Z"
                    fill="currentColor"
                  />
                </svg>
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
                  className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full bg-primary px-4 py-2 text-lg font-bold leading-none text-dark text-white dark:text-darkmode-light`}
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
                  className={`inline-flex h-[38px] w-[38px] items-center justify-center rounded-full px-4 py-2 text-lg font-bold leading-none text-dark dark:text-darkmode-light`}
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
              className="ml-4 flex items-center rounded-full px-2 py-2 font-bold leading-none text-dark dark:text-darkmode-light"
            >
              <>
                <span className="mr-3">Next</span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2929 7.70711C12.9024 7.31658 12.9024 6.68342 13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071C12.9024 17.3166 12.9024 16.6834 13.2929 16.2929L16.5858 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L13.2929 7.70711Z"
                    fill="currentColor"
                  />
                </svg>
              </>
            </Link>
          ) : (
            <span className="ml-4 flex items-center rounded-full px-2 py-2 font-bold text-dark dark:text-darkmode-light">
              <>
                <span className="mr-3">Next</span>
                <svg
                  width="24px"
                  height="24px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.2929 7.70711C12.9024 7.31658 12.9024 6.68342 13.2929 6.29289C13.6834 5.90237 14.3166 5.90237 14.7071 6.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L14.7071 17.7071C14.3166 18.0976 13.6834 18.0976 13.2929 17.7071C12.9024 17.3166 12.9024 16.6834 13.2929 16.2929L16.5858 13L5 13C4.44771 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11L16.5858 11L13.2929 7.70711Z"
                    fill="currentColor"
                  />
                </svg>
              </>
            </span>
          )}
        </nav>
      )}
    </>
  );
};

export default Pagination;
