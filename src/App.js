import React, { useState, useEffect } from 'react';
import './App.css';
import Tours from './Tours';

const url = 'https://course-api.com/react-tours-project';

function App() {
  // const [loading, setLoading] = useEffect(true);
  // const [tours, setTours] = useEffect([]);

  return (
    <main>
      <Tours />
    </main>
  );
}

export default App;
