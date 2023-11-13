import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const random = async () => {
    try {
      const req = await axios.put("https://api-kup.vercel.app/update/6551a3d4bd6eeffe50f8d24f");
      const sea = req.data; 
      console.log(sea);
    } catch (error) {
      console.error("Error:", error);
    }
  }

  useEffect(() => {
    const intervalId = setInterval(random, 5000);

    // Clear the interval when the component is unmounted or when you don't want it anymore
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means it will run once when the component mounts

  return (
    <>
      <button onClick={random}>click</button>
    </>
  );
}

export default App;
