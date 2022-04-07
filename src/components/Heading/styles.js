import styled from "@emotion/styled";
import { Brown } from "../../theme";

const Style = styled.h1`
  font-size: ${p => p.size};
  font-weight: ${p => p.weight};
  color: ${p => p.color};
  text-align: ${p => p.align};
  margin: 20px;
`;

export default Style;