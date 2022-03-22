import styled from "@emotion/styled";
import { Description } from "../../theme";

const Style = styled.h1`
  font-size: ${(p) => p.size};
  font-weight: ${(p) => p.weight};
  color: ${Description};
`;

export default Style;
