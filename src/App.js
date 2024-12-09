import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import { DashboardPage } from "./pages/dashboard/dashboardpage"; 
import { Entry } from "./pages/entry/Entry.page";
import { AddTicket } from './pages/newTicket/AddTicketPage';
import { Ticketlists } from './pages/ticketLists/Ticketlists.page';
import { Ticket } from './pages/insideTicket/insideticket.page';
import { PrivateRoute } from './components/privateRoute/privateRoute.component';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Entry />} />
          <Route path="/dashboard" element={<PrivateRoute><DashboardPage /></PrivateRoute>} />
          <Route path="/add-ticket" element={<PrivateRoute><AddTicket /></PrivateRoute>} />
          <Route path="/ticket-lists" element={<PrivateRoute><Ticketlists /></PrivateRoute>} />
          <Route path="/insideticket/:tId" element={<PrivateRoute><Ticket /></PrivateRoute>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;