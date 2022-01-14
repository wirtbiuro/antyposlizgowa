import { useState, useEffect } from "react";

const useScrollPosition = () => {

  // Store the state
  const [scrollPos, setScrollPos] = useState(0);

  // On Scroll
  const onScroll = () => {
    setScrollPos(window.pageYOffset);
  };

  // Add and remove the window listener
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });

  if (typeof window === "undefined") return 0;

  return scrollPos;
};

export default useScrollPosition;
