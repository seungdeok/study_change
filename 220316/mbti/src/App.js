import React, { useEffect, useState } from 'react';
import ReactLoading from 'react-loading';

import './App.css';

function LoadingPage() {
  return (
    <div className="loading-wrapper">
      <ReactLoading type="bubbles" />
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const [number, setNumber] = useState(0);

  function handleIncrement() {
    setNumber(number + 1);
  }

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) return <LoadingPage />;
  return (
    <div className="loading-wrapper">
      <button onClick={handleIncrement}>-</button>
      <div>{number}</div>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}

export default App;
