import React from "react";
import Style, { Bold } from "./styles";

export default function Text({ bold, children }) {
  return bold ? <Bold>{children}</Bold> : <Style>{children}</Style>;
}
