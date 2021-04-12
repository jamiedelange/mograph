import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import Footer from './components/Footer';

function App() {
  const [backgroundColor, setBackgroundColor] = useState("white");

  useEffect(() => {
    document.title = "Mograph Mafia"
  }, [])

  return (
    <body style={{ 'backgroundColor': backgroundColor }}>
      <Gallery backgroundColor={backgroundColor} setBackgroundColor={setBackgroundColor}/>
      <Footer></Footer>
    </body>
  );
}

export default App;