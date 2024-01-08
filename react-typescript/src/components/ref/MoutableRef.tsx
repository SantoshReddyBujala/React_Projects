import { useState, useRef, useEffect } from "react";

export const MoutableRef = () => {
  const [timer, setTimer] = useState(0);
  const useInterval = useRef<number | null>(null);

  const stopTimer = () => {
    if (useInterval.current) window.clearInterval(useInterval.current);
  };

  useEffect(() => {
    useInterval.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
      console.log(timer);
    }, 1000);
    return () => {
        console.log(timer);
      stopTimer();
    };
  }, []);
  return (
    <div>
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};
