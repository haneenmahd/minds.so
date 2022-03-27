import styled from "@emotion/styled";
import { Text, TextBold } from "../../theme";

const Style = styled.span`
    color: ${Text};
    margin: 0 4px;
`;

const Bold = styled(Style)`
    color: ${TextBold};
    font-weight: bold;
`;

export { Bold };
export default Style;