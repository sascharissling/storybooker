import React from "react";
import styled from "@emotion/styled";

//STYLE start

const Input = styled.input`
  width: 500px;
  height: 30px;
  font-size: 24px;
  font-weight: bold;
  font-family: "Source Sans Pro", sans-serif;
`;

//STYLE end

export default function PasswordInput() {
  return (
    <form>
      <Input type="text" />
    </form>
  );
}
