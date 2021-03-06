import React from 'react'
import Style from "./styles";

export default function TextInput({
    width = "100%",
    padding = "5px 10px",
    margin = "10px 0",
    placeholder = "Your Text Input",
    size = "15px",
}) {
  return (
    <Style
        padding={padding}
        margin={margin}
        placeholder={placeholder}
        size={size}
        type="text" 
        width={width} />
  )
}
