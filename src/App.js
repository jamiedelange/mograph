import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const [textColor, setTextColor] = useState("black");

  useEffect(() => {
    document.title = "Mograph Mafia"
  }, [])

  return (
    <div className="mainBody" style={{ 'backgroundColor': backgroundColor }}>
      <Gallery backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor} textColor={textColor} setTextColor={setTextColor}/>
      <Footer textColor={textColor} setTextColor={setTextColor}/>
    </div>
  );
}

export default App;