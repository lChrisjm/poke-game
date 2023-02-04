import React, { useState, useEffect } from 'react';

const Countdown = () => {
  const [seconds, setSeconds] = useState(3);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [seconds]);

  return (
    <div className="text-center text-sm md:text-xl text-blue-500 font-play ">
      {seconds >= 0 && `Siguiente en: ${seconds} segundos`}
    </div>
  );
};

export default Countdown;