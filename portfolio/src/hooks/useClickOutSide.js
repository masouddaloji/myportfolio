import { useEffect } from "react";

const useClickOutSide = ({ ref, setStateHandler }) => {
    const outsideClickHandler = (e) => {
        if (ref?.current === e.target) {
            setStateHandler(false)
        }
      };
      useEffect(() => {
        document.addEventListener("click", outsideClickHandler);
        return () => document.removeEventListener("click", outsideClickHandler);
      }, [ref, setStateHandler])
};

export default useClickOutSide;
