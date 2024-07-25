// src/pages/Home.jsx

import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/Cards';
import grafica from '../assets/grafica.svg';

function Home() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:3000');

    ws.onopen = () => {
      console.log('WebSocket connected');
    };

    ws.onmessage = (event) => {
      const receivedData = JSON.parse(event.data);
      setData(receivedData);
    };

    ws.onclose = () => {
      console.log('WebSocket disconnected');
    };

    return () => {
      ws.close();
    };
  }, []);

  return (
    <>
      <section className="w-[96%] mx-auto max-w-screen-xl mt-7 pb-5">
        <article className="w-full flex items-center justify-center mb-2">
          <img className="w-full" src={grafica} alt="" />
        </article>

        <div className="grid grid-cols-2 gap-2">
          <Cards
            onClick={() => navigate('/Infrared')}
            event="Infrared Temperature"
            nota={data ? `Object: ${data.temperature.object}°C` : 'No data yet'}
            last="a moment ago"
          />

          <Cards
            onClick={() => navigate('/Heart')}
            event="Heart Rate"
            nota={data ? `${data.heart_rate} bpm` : 'No data yet'}
            last="a moment ago"
          />

          <Cards
            onClick={() => navigate('/Viriability')}
            event="Heart Rate Variability"
            nota={data ? `${data.pulse} ms` : 'No data yet'}
            last="a moment ago"
          />
        </div>
      </section>
    </>
  );
}

export default Home;
