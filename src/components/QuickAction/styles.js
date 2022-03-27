import styled from "@emotion/styled";

const Style = styled.button`
  height: 40px;
  min-width: 40px;
  padding: 0 5px;
  background-color: #fafafa;
  border: 1px solid #a7a7a7;
  outline: none;
  border-radius: 8px;
  cursor: pointer;
  transition: .25s;

  &:hover {
      background-color: #e7e7e7;
  }
`;

export default Style