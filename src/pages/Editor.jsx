import React from "react";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Body from "../components/Body/styles";
import Heading from "../components/Heading";
import QuickAction from "../components/QuickAction";
import QuoteInput from "../components/QuoteInput";
import AuthorInput from "../components/AuthorInput";

const EditorBody = styled(Body)`
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Editor() {
  return (
    <Container className={css`
      min-height: 100vh;
    `} padding="0">
      <Nav>
        <Heading>Editor</Heading>

        <QuickAction>Preview</QuickAction>
      </Nav>

      <EditorBody>
        <QuoteInput margin="0" padding="0" />
        <AuthorInput margin="0" padding="0" />
      </EditorBody>
    </Container>
  );
}
