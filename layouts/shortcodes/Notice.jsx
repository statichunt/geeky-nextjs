function Notice({ type, children }) {
  return (
    <div className={`notice ${type} relative mb-8`}>
      <div className="notice-head absolute top-0 left-0 z-10 flex h-[30px] w-full items-center px-3">
        <svg width="16px" height="16px" viewBox="0 0 512 512">
          <path
            fill="#fff"
            d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
          />
        </svg>
        <p className="my-0 ml-1.5 text-base capitalize text-white dark:text-white">
          {type}
        </p>
      </div>
      <div className="notice-body my-0 p-3 pt-[40px] dark:text-darkmode-light">
        {children}
      </div>
    </div>
  );
}

export default Notice;
