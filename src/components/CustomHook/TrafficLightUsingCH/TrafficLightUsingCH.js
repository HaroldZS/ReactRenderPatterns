import React, { useEffect, useState } from "react";
import "./TrafficLightUsingCH.css";
import { TrafficMessage } from "../../../components/HighOrderComponents/TrafficMessage/TrafficMessage";
import { useNearbyPeople } from "../../../routes/CustomHooks/useNearbyPeople";

function TrafficLightUsingCH() {
  const { peopleNearby, setPeopleNearby, time } = useNearbyPeople(2000);
  const [{ red, orange, green }, setState] = useState({
    red: true,
    orange: false,
    green: false,
  });

  useEffect(() => {
    if (peopleNearby) {
      setTimeout(() => {
        setState({
          red: false,
          orange: false,
          green: true,
        });
        setTimeout(() => {
          setState({
            red: false,
            orange: true,
            green: false,
          });
          setTimeout(() => {
            setState({
              red: true,
              orange: false,
              green: false,
            });
            setPeopleNearby(false);
            setTimeout(() => {
              setPeopleNearby(true);
            }, time * 1.25);
          }, 1000);
        }, time);
      }, 1000);
    }
  }, [peopleNearby]);

  return (
    <>
      {red && <TrafficMessage message={"There are no people nearby"} />}
      {orange && <TrafficMessage message={"There are people nearby!"} />}
      {green && <TrafficMessage message={"People are crossing the street"} />}
      <div className="trafficLight">
        <div className={`light ${red && "red"}`}></div>
        <div className={`light ${orange && "orange"}`}></div>
        <div className={`light ${green && "green"}`}></div>
      </div>
    </>
  );
}

export { TrafficLightUsingCH };
