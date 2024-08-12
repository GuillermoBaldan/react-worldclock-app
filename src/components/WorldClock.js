import React, { useState, useEffect } from 'react';

const WorldClock = () => {
  const [timezones, setTimezones] = useState([
    { city: 'Nueva York', timezone: 'America/New_York', time: '' },
    { city: 'Londres', timezone: 'Europe/London', time: '' },
    { city: 'Tokio', timezone: 'Asia/Tokyo', time: '' },
    { city: 'Sydney', timezone: 'Australia/Sydney', time: '' },
  ]);

  useEffect(() => {
    const updateTimes = () => {
      const newTimezones = timezones.map(tz => {
        const time = new Date().toLocaleTimeString('es-ES', {
          timeZone: tz.timezone,
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
        });
        return { ...tz, time };
      });
      setTimezones(newTimezones);
    };

    const intervalId = setInterval(updateTimes, 1000);

    return () => clearInterval(intervalId);
  }, [timezones]);

  return (
    <div>
      <h1 className="center-align">Reloj Mundial</h1>
      <ul className="collection">
        {timezones.map((tz, index) => (
          <li key={index} className="collection-item">
            <span className="title"><strong>{tz.city}:</strong></span> {tz.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldClock;
