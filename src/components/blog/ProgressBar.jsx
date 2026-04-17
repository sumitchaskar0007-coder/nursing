import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scroll, setScroll] = useState(0);

  const handleScroll = () => {
    const totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    const scrollPosition = window.scrollY;

    setScroll((scrollPosition / totalHeight) * 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      style={{
        height: "4px",
        background: "#00adb5",
        width: `${scroll}%`,
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 999,
      }}
    />
  );
};

export default ProgressBar;