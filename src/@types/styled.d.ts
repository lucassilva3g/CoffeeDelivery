// style.d.ts
/* eslint-disable @typescript-eslint/no-empty-interface */

import "styled-components"

import { ThemeProps } from "../styles/themes/types"

declare module "styled-components" {
  export interface DefaultTheme extends ThemeProps {}
}
