import React, { useState } from "react";
import { Module } from "../../components/Module/Module";
import { UserList } from "../../components/ComponentComposition/UserList/UserList";
import { UserListCC } from "../../components/ComponentComposition/UserListCC/UserListCC";
import { UserItem } from "../../components/ComponentComposition/UserItem/UserItem";
import { users } from "../data/users";

function ComponentComposition() {
  const [state, setState] = useState({ state1: "state1", state2: "state2" });

  return (
    <Module title="Component Composition">
      <p>Before</p>
      <UserList users={users} state={state} />
      <p>After</p>
      <UserListCC>
        {
          <ul>
            {users.map((user) => (
              <UserItem {...user} {...state}/>
            ))}
          </ul>
        }
      </UserListCC>
    </Module>
  );
}

export { ComponentComposition };
