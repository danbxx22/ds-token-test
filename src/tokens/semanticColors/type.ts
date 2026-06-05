import type { Recursive, TokenDataTypes, Token } from '@pandacss/types';

type ConditionalColor = {
  base: TokenDataTypes['colors'];
  _dark?: TokenDataTypes['colors'];
};

export type SemanticColorTokenValue = Token<TokenDataTypes['colors'] | ConditionalColor>;

export type SemanticColorToken = Recursive<SemanticColorTokenValue>;
