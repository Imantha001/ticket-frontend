import React from 'react';
import './App.css';
import { DefaultLayout } from './layout/defaultlayout';
import { DashboardPage } from "./pages/dashboard/dashboardpage"; 

import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from './pages/newTicket/AddTicketPage';
import { Ticketlists } from './pages/ticketLists/Ticketlists.page';

function App() {
  return (
    <div className="App">
      {/* <Entry/> */}
      <DefaultLayout>
        {/* <DashboardPage /> */}
        {/* <AddTicket /> */}
        <Ticketlists/>
      </DefaultLayout>
    </div>
  );
}

export default App;
