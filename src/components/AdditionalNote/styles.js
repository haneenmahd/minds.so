import styled from "@emotion/styled";
import { Text, TextBold } from "../../theme";

const Style = styled.span`
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    align-items: center;
    justify-content: center;
    width: fit-content;
    padding: 10px 20px;
    border-radius: 15px;
    color: ${TextBold};
    background-color: ${Text}20;
`;

export default Style;