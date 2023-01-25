import { useEffect, useState } from "react";

// how to use
// const { loadedItems, loadItemsHandler, loadItemsFinished } = useLoadMore(filteredWebsites,6,mounted);
// returns {loadedItems, loadItemsHandler, loadItemsFinished}

const useLoadMore = (items, loadPerClick, mounted) => {
  const [loadedItems, setLoadedItems] = useState([]);
  const [next, setNext] = useState(loadPerClick);

  const loadItems = (start, end) => {
    const slicedItems = items.slice(start, end);
    setLoadedItems([...loadedItems, ...slicedItems]);
  };

  const loadItemsHandler = () => {
    loadItems(next, next + loadPerClick);
    setNext(next + loadPerClick);
  };

  useEffect(() => {
    loadItems(0, loadPerClick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const loadItemsFinished = Number(items.length) == Number(loadedItems.length);

  return {
    loadedItems,
    loadItemsHandler,
    loadItemsFinished,
  };
};

export default useLoadMore;
