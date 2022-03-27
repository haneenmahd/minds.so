import React from "react";
import Style from "./styles";

export default function Body({
    padding = "0 40px",
    margin = "5px 8px",
    size = "larger",
    children
}) {
  return (
    <Style
        size={size}
        padding={padding} 
        margin={margin}>
        {children}
    </Style>
  )
}
