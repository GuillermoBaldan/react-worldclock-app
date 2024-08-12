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

    // Actualiza la hora cada segundo
    const intervalId = setInterval(updateTimes, 1000);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalId);
  }, [timezones]);

  return (
    <div>
      <h1>Reloj Mundial</h1>
      <ul>
        {timezones.map((tz, index) => (
          <li key={index}>
            {tz.city}: {tz.time}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WorldClock;
