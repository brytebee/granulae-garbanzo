/*

Don't forget to run

npm i react-swipeable

*/
import React, { useState } from "react";
import { useSwipeable, SwipeEventData } from "react-swipeable";

interface DivContent {
  content: string;
}

const divs: DivContent[] = [
  { content: "Div 1" },
  { content: "Div 2" },
  { content: "Div 3" },
  { content: "Div 4" },
];

function SwipableDivs() {
  const [currentDivIndex, setCurrentDivIndex] = useState<number>(0);

  const handlers = useSwipeable({
    onSwiped: (eventData: SwipeEventData) => {
      const direction = eventData.dir;
      setCurrentDivIndex((prevIndex) => {
        let newIndex = direction === "Left" ? prevIndex + 1 : prevIndex - 1;

        // Circular swiping:
        if (newIndex < 0) {
          newIndex = divs.length - 1;
        } else if (newIndex >= divs.length) {
          newIndex = 0;
        }

        return newIndex;
      });
    },
  });

  return (
    <div className="p-10" {...handlers}>
      {divs[currentDivIndex].content}
    </div>
  );
}

export default SwipableDivs;
