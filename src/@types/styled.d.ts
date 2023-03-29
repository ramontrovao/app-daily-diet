import { Theme } from "@theme/default";
import "styled-components";

type ThemeType = typeof Theme;

declare module "styled-components" {
  interface DefaultTheme extends ThemeType {}
}
