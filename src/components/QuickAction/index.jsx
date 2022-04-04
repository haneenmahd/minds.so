import React from "react";
import Style from "./styles";

export default function QuickAction({ action, children }) {
  return <Style onClick={action}>{children}</Style>;
}
