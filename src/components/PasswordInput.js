import React from "react";
import styled from "@emotion/styled";

//STYLE start

function calcHue(props) {
  return Math.min(props.value.length * 10, 100);
}

const Input = styled.input`
  width: 500px;
  height: 30px;
  font-size: 24px;
  border-radius: 15px;
  font-family: "Source Sans Pro", sans-serif;
  background: red;
  padding: 5px;
  &:focus {
    background: hsl(${calcHue}, 60%, 60%);
    outline: 4px solid slateblue;
  }
`;

//STYLE end

export default function PasswordInput({ onChange }) {
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    onChange(password);
  }

  function handleChange(event) {
    const value = event.target.value;
    setPassword(value);
  }

  return (
    <form onChange={handleSubmit}>
      <Input type="password" value={password} onChange={handleChange} />
    </form>
  );
}
