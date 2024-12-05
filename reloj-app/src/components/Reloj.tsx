import React, { useState, useEffect } from 'react';
import Header from './Header';
import Lista from './lista';


const Reloj: React.FC = () => {
  const [currentTime, setCurrentTime] = useState<string>('');
  const [savedTimes] = useState<string[]>([
    '10:04:00',
    '10:05:00',
    '10:06:00',
    ]);


  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      const seconds = now.getSeconds().toString().padStart(2, '0');
      setCurrentTime(`${hours}:${minutes}:${seconds}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  

  return (
    <div className="container">
      <Header currentTime={currentTime}/>
      <Lista savedTimes={savedTimes} />
    </div>
  );
};

export default Reloj;
