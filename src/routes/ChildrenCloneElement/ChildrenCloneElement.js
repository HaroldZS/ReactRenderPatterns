import React from "react";
import { AppHeader } from "../../components/ChildrenCloneElement/AppHeader/AppHeader";
import { AppSearch } from "../../components/ChildrenCloneElement/AppSearch/AppSearch";
import { AppCounter } from "../../components/ChildrenCloneElement/AppCounter/AppCounter";
import { OriginalButton } from "../../components/ChildrenCloneElement/OriginalButton/OriginalButton";

function ChildrenCloneElement() {
  const originalElement = (
    <OriginalButton title="Original Button" color="blue" />
  );
  const clonedElement = React.cloneElement(originalElement, {
    title: "Cloned Button",
    color: "red",
  });

  return (
    <>
      <AppHeader loading={true}>
        <AppCounter count={5} total={10} />
        <AppSearch searchExample="Example" />
      </AppHeader>

      <AppHeader loading={false}>
        <AppCounter count={5} total={10} />
        <AppSearch searchExample="Example" />
      </AppHeader>

      <>
        {originalElement}
        {clonedElement}
      </>
    </>
  );
}

export { ChildrenCloneElement };
