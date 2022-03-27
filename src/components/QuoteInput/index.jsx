import React from 'react'
import Style from './styles'

export default function QuoteInput({
  width = "100%",
  padding = "5px 10px",
  margin = "10px 0",
  placeholder = "Your awesome quotes goes here...",
  size = "15px",
}) {
  return (
    <Style
      width={width}
      padding={padding}
      margin={margin}
      placeholder={placeholder}
      size={size}
    />
  );
}
