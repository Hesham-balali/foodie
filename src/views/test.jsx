import React, { useState } from "react";
import { slice, concat } from "lodash";

// import "./styles.css";

const LENGTH = 50;
const DATA = [...Array(LENGTH).keys()];
const IMAGE_SRC =
  "https://www.themealdb.com/images/media/meals/z0ageb1583189517.jpg";
const LIMIT = 10;

export default function App() {
  const [showMore, setShowMore] = useState(true);
  const [list, setList] = useState(slice(DATA, 0, LIMIT));
  const [index, setIndex] = useState(LIMIT);

  const loadMore = () => {
    const newIndex = index + LIMIT;
    const newShowMore = newIndex < LENGTH - 1;
    const newList = concat(list, slice(DATA, index, newIndex));
    setIndex(newIndex);
    setList(newList);
    setShowMore(newShowMore);
  };
  return (
    <div className="App">
      <div className="image-container">
        {list.map(() => (
          <img src={IMAGE_SRC} alt="random" />
        ))}
      </div>
      {showMore && <button onClick={loadMore}> Load More </button>}
    </div>
  );
}
