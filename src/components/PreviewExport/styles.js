import { css } from "@emotion/react";
import styled from "@emotion/styled";

const Active = css`
  top: 50%;left: 50%;
  transform: translate(-50%, -50%);
`;

const Style = styled.div`
  position: absolute;
  top: -400%; left: 0%;
  height: 500px; width: 80vmin;
  text-align: center;
  padding: 30px 0;
  background-color: #fff;
  border: 0.7px solid #939393;
  border-radius: 8px;
  box-shadow: 0 20px 100vh 0 rgba(0, 0, 0, 0.38);
  transition: 0.5s ease;

  ${(p) => p.active && Active}
`;

export default Style;