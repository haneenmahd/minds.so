import React, { useState } from "react";
import styled from "@emotion/styled";
import { css, cx } from "@emotion/css";
import Container from "../components/Container";
import Nav from "../components/Nav";
import Body from "../components/Body/styles";
import Heading from "../components/Heading";
import QuickAction from "../components/QuickAction";
import QuoteInput from "../components/QuoteInput";
import AuthorInput from "../components/AuthorInput";
import { Play } from "react-feather";
import PreviewExport from "../components/PreviewExport";

const EditorBody = styled(Body)`
  min-height: calc(100vh - 130px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default function Editor() {
  const [previewOpen, setPreviewOpen] = useState(false);

  window.onkeydown = (e) => {
    String(e.key).toLocaleLowerCase() === "x" && setPreviewOpen(false);
  }

  return (
    <Container
      className={css`
        height: 100vh;
      `}
      padding="0"
      margin="0">
      <Nav>
        <Heading>Editor</Heading>

        <QuickAction action={() => setPreviewOpen(!previewOpen)}> <Play/> Preview</QuickAction>
      </Nav>

      <EditorBody id="quote-input">
        <QuoteInput margin="0" padding="0" />
        <AuthorInput margin="0" padding="0" />
      </EditorBody>

      <PreviewExport targetRenderInputElement={document.getElementById("quote-input")} active={previewOpen}>
        <Heading>
          A Preview of the Export Card
        </Heading>
      </PreviewExport>
    </Container>
  );
}
