import React from "react";
import { UserContext } from "./context";
import { Module } from "../../components/Module/Module";
import { UserProfile } from "../../components/RenderFunctions/UserProfile";

function RenderFunctions() {
  const user = {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    role: "admin",
  };

  return (
    <UserContext.Provider value={{ ...user }}>
      <Module title="Render Functions">
        <UserProfile />
      </Module>
    </UserContext.Provider>
  );
}

export { RenderFunctions };
