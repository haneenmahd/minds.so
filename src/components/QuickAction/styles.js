import styled from "@emotion/styled";
import { TransitionEase } from "../../theme";

const Style = styled.button`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  min-width: 40px;
  padding: 10px 20px;
  background-color: #fafafa;
  border: 1px solid #a7a7a7;
  font-size: 15px;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: ${TransitionEase};

  &:hover {
      background-color: #e7e7e7;
  }

  svg {
    height: 18px; width: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px; padding: 0;
  }
`;

export default Style