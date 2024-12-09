import React, { useState, useEffect } from "react";

const StaticUI = React.memo(() => {
  console.log("StaticUI rendered");
  return (
    <h1 style={{ fontFamily: "Arial, sans-serif" }}>
      Static Content
    </h1>
  );
});

const LiveTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: "20px", }}>
      <StaticUI />
      <p style={{ fontSize: "24px", fontWeight: "bold", color: "#2a9d8f" }}>
        Live Time: {time}
      </p>
    </div>
  );
};

export default LiveTime;
