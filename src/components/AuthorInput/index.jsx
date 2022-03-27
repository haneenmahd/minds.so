import React from 'react'
import Style from './styles'

export default function AuthorInput({
  width = "100%",
  padding = "5px 10px",
  margin = "10px 0",
  placeholder = "Author of the quote",
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
