import React from "react";
import "./UserItem.css";

function UserItem({ name, lastname, age }) {
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
    </li>
  );
}

export { UserItem };
