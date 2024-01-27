import React from "react";
import "./UserItem.css";

function UserItem({ name, lastname, age, state1, state2 }) {
  return (
    <li className="user-container">
      <div className="user-column">
        <p>{name}</p>
      </div>
      <div className="user-column">
        <p>{lastname}</p>
      </div>
      <div className="user-column">
        <p>{age}</p>
      </div>
      <div className="user-column">
        <p>{state1}</p>
      </div>
      <div className="user-column">
        <p>{state2}</p>
      </div>
    </li>
  );
}

export { UserItem };
