import React from "react";
import { Brown } from "../../theme";
import Style from "./styles";

export default function Heading({
    size = "25px",
    weight = "bold",
    align = "left",
    color = Brown,
    children
}) {
    return (
        <Style 
            size={size}
            weight={weight}
            align={align}
            color={color}>
            {children}
        </Style>
    )
}