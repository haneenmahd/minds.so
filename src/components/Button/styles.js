import styled from "@emotion/styled";
import { Brown, BrownAccent, TransitionEase } from "../../theme";

const Style = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: ${p => p.padding};
  margin: ${p => p.margin};
  background: ${Brown};
  font-weight: 700;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  border-radius: 8px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: ${TransitionEase};

  /* Optimisation for icons  */
  svg {
    height: 20px; width: 20px;
    display: flex;
    align-items: center;
    justify-content: end;
    margin: 0 10px;
  }

  &:hover {
    background: ${BrownAccent};
  }
`;

export default Style;