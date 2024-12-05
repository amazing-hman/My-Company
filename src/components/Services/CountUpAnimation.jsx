import { useEffect, useState } from 'react';

function CountUpAnimation({ targetNumber }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // Duration of animation in ms
    const increment = targetNumber / (duration / 16); // Increment per frame
    const interval = setInterval(() => {
      start += increment;
      if (start >= targetNumber) {
        start = targetNumber;
        clearInterval(interval);
      }
      setCount(Math.floor(start)); // Update count
    }, 16); // 16ms ~ 60fps

    return () => clearInterval(interval);
  }, [targetNumber]);

  return <span>{count}</span>;
}

export default CountUpAnimation;