import React from "react";
import { ColorModeContext } from "../contexts/ColorModeContext";

export default function useColorModeContext() {
  return React.useContext(ColorModeContext);
}
