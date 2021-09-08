import React, { useState } from "react";
import { Link } from "react-router-dom";

import { Text } from "../../elements";
import { Logo } from "../svg";
import { AppHeader, AppLink } from "./header.styles";

const Header = () => {
  const [mood, setMood] = useState("confuso");

  const handleClick = () => setMood("esclarecido");

  return (
    <AppHeader>
      <Logo color="#F66" />
      <Text>
        O Átila está <strong>{mood}</strong>
      </Text>
      <button onClick={handleClick}>Explicar</button>
      <Text>
        Edit <code>src/App.js</code> and save to reload.
      </Text>
      <AppLink
        color="#F66"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </AppLink>
      <Link to="/unk">UNK</Link>
    </AppHeader>
  );
};
export default Header;
