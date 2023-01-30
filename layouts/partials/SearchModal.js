import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";

const SearchModal = ({ searchModal, setSearchModal }) => {
  const router = useRouter();
  const [input, setInput] = useState("");

  useEffect(() => {
    if (searchModal) {
      document.getElementById("searchModal").focus();
      document.addEventListener("keydown", (e) => {
        if (e.key === "Enter") {
          router.push({ pathname: "/search", query: { key: input } });
          setSearchModal(false);
        }
        if (e.key === "Escape") {
          setSearchModal(false);
        }
      });
    }
  });
  return (
    <div className={`search-modal ${searchModal ? "open" : ""}`}>
      <button onClick={() => setSearchModal(false)} className="search-close">
        <IoCloseCircleOutline />
      </button>
      <input
        type="text"
        className="form-input bg-body placeholder:text-base dark:bg-darkmode-body"
        id="searchModal"
        placeholder="Type and hit enter..."
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
};

export default SearchModal;
