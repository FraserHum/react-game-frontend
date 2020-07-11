import React, { Component }  from 'react';
import logo from './logo.svg';
import { HexGrid, Layout, Hexagon, GridGenerator, Pattern } from 'react-hexgrid';
import Image1 from './img/TileForest.png';
import Image2 from './img/TileOcean.png';
import Image3 from './img/TileDesert.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HexGrid width={1200} height={1000}  viewBox="-50 -50 100 100">
          <Layout size={{ x: 7, y: 7 }} flat={false} origin={{ x: 0, y: 0 }}>
            { GridGenerator.hexagon(7).map((hex, i) => <Hexagon key={i} q={hex.q} r={hex.r} s={hex.s} fill={"pat-" + Number(Math.floor(Math.random() * Math.floor(3) + 1))} />) }
          </Layout>
          <Pattern id='pat-1' link={Image1} size={{x:6, y:7}} />
          <Pattern id='pat-2' link={Image2} size={{x:6, y:7}} />
          <Pattern id='pat-3' link={Image3} size={{x:6, y:7}} />
        </HexGrid>
      </header>
    </div>
  );
}

export default App;
