import styled from "@emotion/styled";
import { Brown } from "../../theme";

const Style = styled.h1`
  font-size: ${p => p.size};
  font-weight: ${p => p.weight};
  color: ${Brown};
  text-align: ${p => p.align};
  margin: 20px 0;
`;

export default Style;