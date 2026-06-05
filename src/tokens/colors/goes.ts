import type { ColorToken } from './type';

const green: ColorToken = {
  light: {
    '100': { value: '#ecfdf5' },
    '200': { value: '#d1fae5' },
    '300': { value: '#a7f3d0' },
    '400': { value: '#6ee7b7' },
    '500': { value: '#34d399' },
    '600': { value: '#10b981' },
    '700': { value: '#059669' },
    '800': { value: '#047857' },
    '900': { value: '#065f46' },
    '1000': { value: '#064e3b' },
    '1100': { value: '#022c22' },
    '1200': { value: '#02281f' },
    a100: { value: 'rgba(16, 185, 129, 0.06)' },
    a200: { value: 'rgba(16, 185, 129, 0.09)' },
    a300: { value: 'rgba(16, 185, 129, 0.12)' },
  },
};

const orange: ColorToken = {
  light: {
    '100': { value: '#fffbeb' },
    '200': { value: '#fef3c7' },
    '300': { value: '#fde68a' },
    '400': { value: '#fcd34d' },
    '500': { value: '#fbbf24' },
    '600': { value: '#f59e0b' },
    '650': { value: '#D97706' },
    '700': { value: '#b45309' },
    '800': { value: '#92400e' },
    '900': { value: '#78350f' },
    '1000': { value: '#451a03' },
    '1100': { value: '#3f1803' },
    '1200': { value: '#311202' },
    a100: { value: 'rgba(245, 158, 11, 0.06)' },
    a200: { value: 'rgba(245, 158, 11, 0.09)' },
    a300: { value: 'rgba(245, 158, 11, 0.12)' },
  },
};

const violet: ColorToken = {
  light: {
    '100': { value: '#f5f3ff' },
    '200': { value: '#ede9fe' },
    '300': { value: '#ddd6fe' },
    '400': { value: '#c4b5fd' },
    '500': { value: '#a78bfa' },
    '600': { value: '#8b5cf6' },
    '700': { value: '#7c3aed' },
    '800': { value: '#6d28d9' },
    '900': { value: '#5b21b6' },
    '1000': { value: '#4c1d95' },
    '1100': { value: '#2e1065' },
    '1200': { value: '#290e5b' },
    a100: { value: 'rgba(139, 92, 246, 0.06)' },
    a200: { value: 'rgba(139, 92, 246, 0.09)' },
    a300: { value: 'rgba(139, 92, 246, 0.12)' },
  },
};

const red: ColorToken = {
  light: {
    '100': { value: '#fef2f2' },
    '200': { value: '#fee2e2' },
    '300': { value: '#fecaca' },
    '400': { value: '#fca5a5' },
    '500': { value: '#f87171' },
    '600': { value: '#ef4444' },
    '700': { value: '#dc2626' },
    '800': { value: '#b91c1c' },
    '900': { value: '#991b1b' },
    '1000': { value: '#7f1d1d' },
    '1100': { value: '#450a0a' },
    '1200': { value: '#3f0909' },
    a100: { value: 'rgba(239, 68, 68, 0.06)' },
    a200: { value: 'rgba(239, 68, 68, 0.09)' },
    a300: { value: 'rgba(239, 68, 68, 0.12)' },
  },
};

export const goes = {
  light: {
    '100': { value: '#eff6ff' },
    '200': { value: '#dbeafe' },
    '300': { value: '#bfdbfe' },
    '400': { value: '#93c5fd' },
    '500': { value: '#60a5fa' },
    '600': { value: '#3b82f6' },
    '700': { value: '#2563eb' },
    '800': { value: '#1d4ed8' },
    '900': { value: '#1e40af' },
    '1000': { value: '#1e3a8a' },
    '1100': { value: '#172554' },
    '1200': { value: '#15224c' },
    a100: { value: 'rgba(59, 130, 246, 0.06)' },
    a200: { value: 'rgba(59, 130, 246, 0.09)' },
    a300: { value: 'rgba(59, 130, 246, 0.12)' },
    a400: { value: 'rgba(59, 130, 246, 0.16)' },
    a500: { value: 'rgba(59, 130, 246, 0.2)' },
    a600: { value: 'rgba(59, 130, 246, 0.24)' },
  },
  green,
  orange,
  violet,
  red,
};
