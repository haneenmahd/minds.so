import styled from "@emotion/styled";
import { Brown } from "../../theme";

const Style = styled.textarea`
  font-size: 4vmax;
  text-align: center;
  border: none;
  color: ${Brown};
  font-weight: 500;
  resize: none;
  min-height: 50px;
  width: ${(p) => p.width};
  padding: ${(p) => p.padding};
  margin: ${(p) => p.margin};
  transition: all 0.25s;
  outline: none;

  &::placeholder {
    font-weight: normal;
  }

  @media screen and (max-width: 700px) {
    font-size: 4vmin;
  }
`;

export default Style;