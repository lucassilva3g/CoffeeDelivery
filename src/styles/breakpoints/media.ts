/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { css, SimpleInterpolation } from "styled-components"

const size = {
  xs: "0px",
  sm: "576px",
  md: "768px",
  lg: "992px",
  xl: "1200px",
  xxl: "1400px",
}

export const xs = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.xs}) {
    ${css(strings, ...interpolations)};
  }
`

export const sm = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.sm}) {
    ${css(strings, ...interpolations)};
  }
`

export const md = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.md}) {
    ${css(strings, ...interpolations)};
  }
`

export const lg = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.lg}) {
    ${css(strings, ...interpolations)};
  }
`

export const xl = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.xl}) {
    ${css(strings, ...interpolations)};
  }
`

export const xxl = (
  strings: TemplateStringsArray,
  ...interpolations: SimpleInterpolation[]
) => css`
  @media (min-width: ${size.xxl}) {
    ${css(strings, ...interpolations)};
  }
`

export const media = {
  xs,
  sm,
  md,
  lg,
  xl,
  xxl,
} as const
