import React from "react";
import Style from "./styles";

export default function Description({ size = "16px", weight = "normal", children }) {
  return (
    <Style size={size} weight={weight}>
      {children}
    </Style>
  );
}
