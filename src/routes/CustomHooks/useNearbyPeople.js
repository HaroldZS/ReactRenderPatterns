import { useState } from "react";

function useNearbyPeople(time) {
  const [peopleNearby, setPeopleNearby] = useState(true);

  return {
    peopleNearby,
    setPeopleNearby,
    time,
  };
}

export { useNearbyPeople };
