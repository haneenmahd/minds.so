import React from "react";
import Style from "./styles";

export default function Description({ 
  size = "25px", 
  weight = "normal",
  align = "center",
  children
}) {
  return (
    <Style size={size} weight={weight} align={align}>
      {children}
    </Style>
  );
}
