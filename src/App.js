import { Component } from 'react';
import { Canvas } from '@react-three/fiber';
import './App.css';
import TestMesh from './components/testMesh.js';

class App extends Component {
  render () {
    return (
      <div id="canvas-container">
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 35], fov: 25 }}>
        <ambientLight intensity={0.1}/>
        <directionalLight color="red" position={[0, 0, 0]} />
        <TestMesh />
      </Canvas>
    </div>
    )
  }
}

export default App;
