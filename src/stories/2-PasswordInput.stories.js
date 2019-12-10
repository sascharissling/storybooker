import React from "react";
import { action } from "@storybook/addon-actions";
import PasswordInput from "../components/PasswordInput";

export default {
  title: "Password Input"
};
export function Password() {
  return <PasswordInput />;
}
