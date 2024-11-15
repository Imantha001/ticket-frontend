import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultlayout'; // Corrected import

function App() {
  return (
    <div className="App">
      <DefaultLayout>Dashboard</DefaultLayout>
    </div>
  );
}

export default App;
