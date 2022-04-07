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
import { Play as PlayIcon } from "react-feather";
import PreviewExport from "../components/PreviewExport";
import AdditionalNote from "../components/AdditionalNote";

const EditorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const EditorBody = styled(Body)`
  min-height: calc(90vh - 130px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;


export default function Editor() {
  const [previewOpen, setPreviewOpen] = useState(false);

  // Shortcut key to close the modal
  window.onkeydown = (e) => {
    String(e.key).toLocaleLowerCase() === "k" && setPreviewOpen(!previewOpen);
  };

  return (
    <Container
      className={css`
        height: 100vh;
      `}
      padding="0"
      margin="0"
    >
      <Nav>
        <Heading>Editor</Heading>

        <QuickAction action={() => setPreviewOpen(!previewOpen)}>
          <PlayIcon /> {previewOpen ? "Close Preview" : "Preview"}
        </QuickAction>
      </Nav>

      <EditorContainer>
        <EditorBody id="quote-input">
          <QuoteInput margin="0" padding="0" />
          <AuthorInput margin="0" padding="0" />
        </EditorBody>

        <AdditionalNote note="Press K to toggle Preview" />
      </EditorContainer>

      <PreviewExport
        targetRenderInputElement={document.getElementById("quote-input")}
        active={previewOpen}
      >
        <Heading>A Preview of the Export Card</Heading>
      </PreviewExport>
    </Container>
  );
}
