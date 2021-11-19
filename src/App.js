
import './App.css';
import Title from './comps/Title';
import React, { useState } from 'react';
import Updloadform from "./comps/Uploadform";
import ImageGrid from './comps/imageGrid';



function App() {
  const [SelectedImg, setSelectedImg] = useState(null)
  return (
    <div className="App">
      <Title></Title>
      <Updloadform/>
      <ImageGrid setSelectedImg={setSelectedImg}></ImageGrid>

    </div>
  );
}

export default App;
