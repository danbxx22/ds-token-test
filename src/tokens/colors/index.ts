import { black } from './black';
import { white } from './white';
import { gray } from './gray';
import { orange } from './orange';
import { blue } from './blue';
import { green } from './green';
import { red } from './red';
import { neutral } from './neutral';
import { mildangPT } from './mildangPT';
import { defineTokens } from '@pandacss/dev';

export const createColorTokens = () =>
  defineTokens.colors({
    black,
    white,
    gray,
    orange,
    blue,
    green,
    red,
    mildangPT,
    neutral,
  });
