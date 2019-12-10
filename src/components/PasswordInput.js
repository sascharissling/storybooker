import React from "react";
import styled from "@emotion/styled";

//STYLE start

function calculateHue(props) {
  return Math.min(props.value.length * 10, 100);
  //Math.min always returns the smaller value. If the password has 7 characters the result is 70. So 70 is returned. If the password has 12 characters the result is 120. So 100 is returned.
}

const Input = styled.input`
  width: 500px;
  height: 30px;
  font-size: 24px;
  border-radius: 15px;
  font-family: "Source Sans Pro", sans-serif;
  background: red;
  padding: 5px;
  border: none;
  box-shadow: 2px 3px 6px #111;
  &:focus {
    background: hsl(${calculateHue}, 60%, 60%);
  }
`;

//STYLE end

export default function PasswordInput() {
  const [password, setPassword] = React.useState("");

  function handleChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  return (
    <form>
      <Input
        autoFocus
        type="password"
        value={password}
        onChange={handleChange}
      />
    </form>
  );
}
