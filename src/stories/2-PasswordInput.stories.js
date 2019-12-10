import React from "react";
import { action } from "@storybook/addon-actions";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "Password Input"
};
export function Weak() {
  return <PasswordInput value="pw" />;
}
export function Multiple() {
  return (
    <>
      <PasswordInput value="" onChange={action("change")} />
      <PasswordInput value="pw" onChange={action("change")} />
      <PasswordInput value="pass" onChange={action("change")} />
      <PasswordInput value="password" onChange={action("change")} />
      <PasswordInput value="passwordOver" onChange={action("change")} />
      <PasswordInput value="passwordOver9000" onChange={action("change")} />
    </>
  );
}
