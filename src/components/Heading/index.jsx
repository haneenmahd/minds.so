import React from "react";
import Style from "./styles";

export default function Heading({
    size = "25px",
    weight = "bold",
    children
}) {
    return (
        <Style 
            size={size}
            weight={weight}>
            {children}
        </Style>
    )
}