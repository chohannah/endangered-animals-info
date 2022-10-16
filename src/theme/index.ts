import { extendTheme } from "@chakra-ui/react";

import styles from "./styles";
import colors from "./colors";
import config from "./config";
import fonts from "./fonts";

export const theme = extendTheme({
  colors,
  config,
  fonts,
  styles,
});
