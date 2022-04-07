import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { TransitionEase } from "../../theme";

const Active = css`
  top: 50%;left: 50%;
  transform: translate(-50%, -50%);
`;

const Style = styled.div`
  position: absolute;
  top: -400%; left: 0%;
  height: auto; width: 80vmin;
  text-align: center;
  padding: 10px 10px;
  max-height: 90vh;
  background-color: #fff;
  border: 0.7px solid #939393;
  border-radius: 8px;
  box-shadow: 0 20px 100vh 0 rgba(0, 0, 0, 0.38);
  transition: ${TransitionEase};

  ${(p) => p.active && Active}
`;

const QuoteImage = styled.img`
  max-height: 100vh;
  max-width: 100%;
  border-radius: 10px;
`;

export { QuoteImage };
export default Style;