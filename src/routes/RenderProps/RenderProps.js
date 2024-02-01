import React from "react";
import { Module } from "../../components/Module/Module";
import { UserForm } from "../../components/RenderProps/UserForm/UserForm";
import { Alert } from "../../components/RenderProps/Alert/Alert";

function RenderProps() {
  return (
    <Module title="Render Props">
      <UserForm
        onPasswordMismatch={() => (
          <Alert message="Passwords do not match." error={true} />
        )}
        onFormSubmitted={() => <Alert message="Form submitted successfully." />}
      />
    </Module>
  );
}

export { RenderProps };
