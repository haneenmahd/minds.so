import React from "react";
import Style from "./styles";

export default function Button({
    padding = "15px",
    margin = "15px 0",
    style = {},
    action = {},
    children
}) {
    return (
        <Style
            padding={padding}
            margin={margin}
            style={style}
            onClick={action}>
            {children}
        </Style>
    )
}