export const theme = {
  colors: {
    blue: '#07c',
    lightblue: '#254e7b',
    babyblue: '#5584b1',
    lightgray: '#f6f6ff',
    beige: '#f8f3ea'
  },
  fonts: {
    sans: 'system-ui, sans-serif',
    mono: 'Menlo, monospace',
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
    medium: '0 2px 16px rgba(0, 0, 0, 0.25)',
  },
}

export type Theme = typeof theme;