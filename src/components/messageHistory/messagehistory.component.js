import React from "react";
import  PropTypes  from "prop-types";
import "./messageHistory.style.css";

export const MessageHistory = ({ msg }) => {

  // if (!msg) return null;

  console.log(msg);
  return msg.map((row, i) => (
    <div key={i} className="message-history mt-4">
      <div className="send font-weight-bold ">
        <div className="sender">{row.messageBy}</div>
        <div className="date">{row.date}</div>
      </div>
      <div className="message text-secondary" >{row.message}</div>
    </div>
  ));
};
MessageHistory.propTypes= {
  msg: PropTypes.array.isRequired,
};