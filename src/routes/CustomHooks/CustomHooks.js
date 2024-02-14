import React from "react";
import { Module } from "../../components/Module/Module";
import { TrafficLightUsingCH } from "../../components/CustomHook/TrafficLightUsingCH/TrafficLightUsingCH";
import { PoliceUsingCH } from "../../components/CustomHook/PoliceUsingCH/PoliceUsingCH";

function CustomHooks() {
  return (
    <Module title="Custom Hooks">
      <TrafficLightUsingCH />
      <PoliceUsingCH />
    </Module>
  );
}

export { CustomHooks };
