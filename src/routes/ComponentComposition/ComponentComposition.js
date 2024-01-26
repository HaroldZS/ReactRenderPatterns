import React from "react";
import { Module } from "../../components/Module/Module";
import { UserList } from "../../components/ComponentComposition/UserList/UserList";
import { UserListCC } from "../../components/ComponentComposition/UserListCC/UserListCC";
import { UserItem } from "../../components/ComponentComposition/UserItem/UserItem";
import { users } from "../data/users";

function ComponentComposition() {
  return (
    <Module title="Component Composition">
      <p>Before</p>
      <UserList users={users} />
      <p>After</p>
      <UserListCC>
        {
          <ul>
            {users.map((user) => (
              <UserItem {...user} />
            ))}
          </ul>
        }
      </UserListCC>
    </Module>
  );
}

export { ComponentComposition };
