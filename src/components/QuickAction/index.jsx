import React from "react";
import Style from "./styles";

export default function QuickAction({ clickAction, children }) {
  return <Style onClick={clickAction}>{children}</Style>;
}
