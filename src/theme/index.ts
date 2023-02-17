import styles from "@/theme/styles";
import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import * as components from "./components";
import * as foundations from "./foundations";

/**
 * https://chakra-ui.com/docs/styled-system/theme#config
 */
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
  cssVarPrefix: "chakra",
};

const theme = extendTheme({
  config,
  styles,
  ...foundations,
  components,
});

export default theme;
