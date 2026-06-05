import type { Recursive, TokenDataTypes, Token } from '@pandacss/types';

export type ColorTokenValue = Token<TokenDataTypes['colors']>;

export type ColorToken = Recursive<ColorTokenValue>;
