import React, { useEffect, useState } from "react";

const ScrollTracker = () => {
  const [scrollLevel, setScrollLevel] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      document.getElementById("over").style.height = scrolled + "%";
      let currentScrollLevel = Math.ceil(scrolled / 33.33);
      currentScrollLevel = Math.min(currentScrollLevel, 3);

      setScrollLevel(currentScrollLevel);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="scroll">
      <div
        className={`scrollLevel ${scrollLevel >= 1 ? "scrollLevelFill" : ""}`}
      >
        1
      </div>
      <div
        className={`scrollLevel ${scrollLevel >= 2 ? "scrollLevelFill" : ""}`}
      >
        2
      </div>
      <div
        className={`scrollLevel ${scrollLevel >= 3 ? "scrollLevelFill" : ""}`}
      >
        3
      </div>
      <div className="line"></div>
      <div className="over" id="over"></div>
    </div>
  );
};

export default ScrollTracker;
