import React from "react";
import { UserItem } from "../UserItem/UserItem";

function UserList({ users, state }) {
  return (
    <section>
      <ul>
        {users.map((user) => (
          <UserItem {...user} {...state} />
        ))}
      </ul>
    </section>
  );
}

export { UserList };
