import styled from "@emotion/styled";
import { Author, TransitionEase } from "../../theme";

const Style = styled.textarea`
  font-size: 2.5vmax;
  text-align: center;
  background: none;
  border: none;
  color: ${Author};
  font-weight: 500;
  resize: none;
  min-height: 50px;
  width: ${(p) => p.width};
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};
  transition: ${TransitionEase};
  outline: none;

  &::placeholder {
    font-weight: normal;
  }

  @media screen and (max-width: 700px) {
    font-size: 2.5vmin;
  }
`;

export default Style;