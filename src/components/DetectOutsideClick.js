import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const DetectOutsideClick = (el, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClick = (e) => {
      // If the active element exists and is clicked outside of

      if (isActive) {
        setIsActive(!isActive);
      }
    };
    window.addEventListener("click", pageClick);


    // If the item is active (ie open) then listen for clicks outside

    return () => {
      window.removeEventListener("click", pageClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};
