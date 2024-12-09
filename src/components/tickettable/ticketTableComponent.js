import React from 'react';
import { Table } from "react-bootstrap";
import  PropTypes  from "prop-types";
import { Link } from 'react-router-dom';

export const TicketTable = ({ tickets }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Event Name</th>
          <th>Price</th>
          <th>No. of Tickets</th>
          <th>Date</th>
          <th>Seats Number</th>
        </tr>
      </thead>
      <tbody>
      {tickets.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <Link to={`/insideticket/${row.id}`}>{row.Name}</Link>
            </td>
            {/* <td>{row.Name}</td> */}
            <td>{row.Price}</td>
            <td>{row.Tickets}</td>
            <td>{row.Date}</td>
            <td>{row.Seats}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

TicketTable.propTypes = {
  tickets: PropTypes.array.isRequired,
}
