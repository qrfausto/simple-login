import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Button, Container, Header, Icon } from "semantic-ui-react";
import decode from "jwt-decode"; 

const Welcome = () => {
  const [name, setName] = useState("");

  let history = useHistory();
  if (window.localStorage.getItem("data") === null) {
    history.push("/simple-login");
  }

  const logout = () => {
    localStorage.clear();
    history.push("/simple-login");
  };

  if (name==="" ) {
    let token = localStorage.getItem("id_token");
    if (token) {
      const decoded = decode(token);
      console.log(decoded)
      try {
        setName(decoded.displayName);
      } catch (err) {
        history.push("/simple-login");
        localStorage.removeItem("id_token");
      }
    } else {
      history.push("/simple-login");
    }
  }

  return (
    <Container text>
      <Header
        as="h1"
        content={"Hi " + name + ", Welcome!"}
        style={{
          fontSize: "4em",
          fontWeight: "normal",
          marginBottom: 0,
          marginTop: "3em",
        }}
      />
      <Header
        as="h2"
        content=""
        style={{
          fontSize: "1.7em",
          fontWeight: "normal",
          marginTop: "1.5em",
        }}
      />
      <Button primary size="huge" onClick={logout}>
        Logout
        <Icon name="right arrow" />
      </Button>
    </Container>
  );
};
export default Welcome;
