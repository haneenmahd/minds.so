import styled from "@emotion/styled";

const Style = styled.nav`
    min-height: 100px;
    max-width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: ${p => p.margin};
    padding: ${p => p.padding};
`;

export default Style;