import { black } from './black';
import { white } from './white';
import { gray } from './gray';
import { orange } from './orange';
import { blue } from './blue';
import { green } from './green';
import { red } from './red';
import { schoolPT } from './schoolPT';
import { mildangPT } from './mildangPT';
import { pink } from './pink';
import { purple } from './purple';
import { lime } from './lime';
import { yellow } from './yellow';
import { mui } from './mui';
import { gradient } from './gradient';
import { goes } from './goes';
import { defineTokens } from '@pandacss/dev';
import type { PresetOptions } from '../types';
import { educoreColors } from './educore/index';

const baseColors = {
  black,
  white,
  gray,
  orange,
  blue,
  green,
  red,
  purple,
  yellow,
};

export const createColorTokens = (options: PresetOptions = {}) => {
  const themedColors = options.colorSchema === 'educore' ? educoreColors : baseColors;

  return defineTokens.colors({
    ...themedColors,
    schoolPT,
    mildangPT,
    pink,
    lime,
    mui,
    gradient,
    goes,
  });
};

export const colors = createColorTokens();
