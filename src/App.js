import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultlayout';
import { DashboardPage } from "./pages/dashboard/dashboardpage"; 

function App() {
  return (
    <div className="App">
      <DefaultLayout>
        <DashboardPage />
      </DefaultLayout>
    </div>
  );
}

export default App;
