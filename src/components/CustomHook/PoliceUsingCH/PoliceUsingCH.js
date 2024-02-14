import React, { useEffect, useState } from "react";
import "./PoliceUsingCH.css";
import { useNearbyPeople } from "../../../routes/CustomHooks/useNearbyPeople";

function PoliceUsingCH() {
  const { peopleNearby, setPeopleNearby, time } = useNearbyPeople(2000);
  const [working, setWorking] = useState(false);

  useEffect(() => {
    if (peopleNearby) {
      setTimeout(() => {
        setWorking(true);
        setTimeout(() => {
          setWorking(false);
          setPeopleNearby(false);
          setTimeout(() => {
            setPeopleNearby(true);
          }, time * 1.25);
        }, 1000 + time);
      }, 1000);
    }
  }, [peopleNearby]);

  return (
    <div class="policeman">
      <div class="head"></div>
      <div class="body">
        {working && <div className="crossing">CROSSING</div>}
      </div>
    </div>
  );
}

export { PoliceUsingCH };
