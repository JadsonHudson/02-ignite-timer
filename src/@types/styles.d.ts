import { defaultTheme } from '../styles/themes/default'

// Sobreescrevendo o tipo DefaultTheme do styled-components

type ThemeType = typeof defaultTheme
declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
