import React, { useState } from "react";

function withPeopleNearby(WrappedComponent) {
  return function withTime(time) {
    return function WrappedComponentWithPeopleNearby(props) {
      const [peopleNearby, setPeopleNearby] = useState(true);

      return (
        <WrappedComponent
          {...props}
          time={time}
          peopleNearby={peopleNearby}
          setPeopleNearby={setPeopleNearby}
        />
      );
    };
  };
}

export { withPeopleNearby };
