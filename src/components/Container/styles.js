import styled from "@emotion/styled";

const Style = styled.div`
    padding: ${p => p.padding};
    margin: ${p => p.margin};
    align-items: center;
    
    * {
        margin-bottom: ${p => p.spacing};
    }

    @media screen and (min-width: 800px) {
        justify-content: center;
    }
`;

export default Style;
