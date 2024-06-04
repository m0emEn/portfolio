import React, { useEffect, useState } from "react";

const ScrollTrackerMobile = () => {
  const [scrolled, setScrolled] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrolled(scrolled);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="scrollMobile">
      <div
        style={{
          width: `${scrolled}%`,
        }}
      ></div>
    </div>
  );
};

export default ScrollTrackerMobile;
