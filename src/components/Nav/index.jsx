import React from "react";
import Style from "./styles";
import { css, cx } from "@emotion/css";

export default function Nav({
  styleExtend = css``,
  padding = "0 30px",
  margin = "0",
  children,
}) {
  return <Style 
            padding={padding}
            margin={margin} 
            className={styleExtend}>{children}</Style>;
}
