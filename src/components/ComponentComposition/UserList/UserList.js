import React from "react";
import { UserItem } from "../UserItem/UserItem";

function UserList({ users }) {
  return (
    <section>
      <ul>
        {users.map((user) => (
          <UserItem {...user} />
        ))}
      </ul>
    </section>
  );
}

export { UserList };
