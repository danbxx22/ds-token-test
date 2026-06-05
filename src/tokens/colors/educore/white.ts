import type { ColorToken } from '../type';

const color = (value: string) => ({ value });

export const white: ColorToken = {
  a000: color('rgba(242, 244, 248, 0)'),
  a100: color('rgba(242, 244, 248, 0.06)'),
  a200: color('rgba(242, 244, 248, 0.09)'),
  a300: color('rgba(242, 244, 248, 0.12)'),
  a400: color('rgba(242, 244, 248, 0.16)'),
  a500: color('rgba(242, 244, 248, 0.2)'),
  a600: color('rgba(242, 244, 248, 0.24)'),
  a700: color('rgba(242, 244, 248, 0.32)'),
  a800: color('rgba(242, 244, 248, 0.4)'),
  a900: color('rgba(242, 244, 248, 0.6)'),
  a1000: color('rgba(242, 244, 248, 0.7)'),
  a1100: color('rgba(242, 244, 248, 0.8)'),
  a1200: color('rgba(242, 244, 248, 0.9)'),
  a1300: color('#ffffff'),
};
