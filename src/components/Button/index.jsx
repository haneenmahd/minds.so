import React from "react";
import Style from "./styles";

export default function Button({
    padding = "15px",
    margin = "15px 0",
    style = {},
    children
}) {
    return (
        <Style
            padding={padding}
            margin={margin}
            style={style}>
            {children}
        </Style>
    )
}