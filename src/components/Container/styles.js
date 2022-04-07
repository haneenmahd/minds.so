import styled from "@emotion/styled";
import { Skin } from "../../theme";

const Style = styled.div`
    padding: ${p => p.padding};
    margin: ${p => p.margin};
    align-items: center;
    background-color: ${Skin};
    
    * {
        margin-bottom: ${p => p.spacing};
    }
`;

export default Style;
