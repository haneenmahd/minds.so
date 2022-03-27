import React from "react";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Body from "../components/Body";
import Heading from "../components/Heading";
import QuickAction from "../components/QuickAction";

export default function Editor() {
  return (
    <Container padding="0">
      <Nav>
        <Heading>Editor</Heading>

        <QuickAction>Preview Word</QuickAction>
      </Nav>

      <Body>
        
      </Body>
    </Container>
  );
}
