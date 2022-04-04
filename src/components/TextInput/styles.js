import styled from "@emotion/styled";
import { Brown, BrownAccent, TransitionEase } from "../../theme"

const Style = styled.input`
  min-height: 50px;
  width: ${(p) => p.width};
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};
  font-size: ${p => p.size};
  border-radius: 8px;
  border: 1px solid ${Brown}90;
  transition: ${TransitionEase};
  outline: none;

  &:focus {
    border-color: ${BrownAccent};
  }
`;

export default Style;