import React from "react";
import Style from "./styles";

export default function Container({
    className,
    padding = "20px 50px",
    margin = "0",
    style = {},
    spacing = "10px",
    children
}) {
    return (
        <Style
            className={className}
            padding={padding} 
            margin={margin}
            style={style}
            spacing={spacing}>
                {children}
        </Style>
    )
}