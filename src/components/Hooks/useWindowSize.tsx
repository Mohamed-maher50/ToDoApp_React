import { useEffect, useState } from "react";

const useWindowSizes = () => {
  const [Orientation, setOrientation] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });
  const windowResizeHandler = () => {
    setOrientation({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };
  useEffect(() => {
    window.addEventListener("resize", windowResizeHandler);
    return () => window.removeEventListener("resize", windowResizeHandler);
  }, []);
  return {
    width: Orientation.width,
    height: Orientation.height,
  };
};

export default useWindowSizes;
