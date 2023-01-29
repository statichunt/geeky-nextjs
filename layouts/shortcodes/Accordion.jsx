import { useState } from "react";

const Accordion = ({ title, children, className }) => {
  const [show, setShow] = useState(false);

  return (
    <div
      className={`rounded border border-border dark:border-darkmode-border ${className}`}
    >
      <button
        className="relative block w-full bg-theme-light px-4 py-3 text-left text-dark dark:bg-darkmode-theme-dark dark:text-darkmode-light"
        onClick={() => setShow(!show)}
      >
        {title}
        <svg
          className={`absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ${
            show && "rotate-180"
          }`}
          x="0px"
          y="0px"
          viewBox="0 0 512.011 512.011"
          xmlSpace="preserve"
        >
          <path
            fill="currentColor"
            d="M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"
          />
        </svg>
      </button>
      <div className={`px-4 py-3 ${!show && "hidden"}`}>{children}</div>
    </div>
  );
};

export default Accordion;
