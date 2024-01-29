import React from "react";
import { UserContext } from "../../routes/RenderFunctions/context";
import "./UserProfile.css";

function UserProfile() {
  return (
    <UserContext.Consumer>
      {(user) => (
        <div className="user-card">
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
          <p>Role: {user.role}</p>
        </div>
      )}
    </UserContext.Consumer>
  );
}

export { UserProfile };
