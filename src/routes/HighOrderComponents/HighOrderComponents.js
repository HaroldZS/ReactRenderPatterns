import React from "react";
import { Module } from "../../components/Module/Module";
import { TrafficLight } from "../../components/HighOrderComponents/TrafficLight/TrafficLight";
import { Police } from "../../components/HighOrderComponents/Police/Police";
import { withPeopleNearby } from "../../components/HighOrderComponents/withPeopleNearby";

const TrafficLightWithPeopleNearby = withPeopleNearby(TrafficLight)(2000);
const PoliceWithPeopleNearby = withPeopleNearby(Police)(2000);

function HighOrderComponents() {
  return (
    <Module title="High Order Components">
      <TrafficLightWithPeopleNearby />
      <PoliceWithPeopleNearby />
    </Module>
  );
}

export { HighOrderComponents };
