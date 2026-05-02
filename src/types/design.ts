// Tipagem para o Design System do Aerocode - Precision Industrial Aesthetic

export type ColorPalette = 
  | 'primary' | 'primary-container' | 'on-primary' 
  | 'secondary' | 'secondary-container' | 'on-secondary'
  | 'error' | 'error-container' | 'on-error'
  | 'surface' | 'on-surface' | 'background' | 'on-background'
  | 'outline' | 'outline-variant'
  | 'slate-gray' | 'slate-border' | 'slate-hover' | 'deep-slate';

export type TypographySize = 'h1' | 'h2' | 'h3' | 'body-lg' | 'body-md' | 'body-sm' | 'label-md' | 'label-sm' | 'code';
export type Spacing = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'gutter' | 'margin';
export type Shape = 'sm' | 'DEFAULT' | 'md' | 'lg' | 'xl' | 'full';

export interface ThemeConfig {
  colors: Record<ColorPalette, string>;
  spacing: Record<Spacing, string>;
  borderRadius: Record<Shape, string>;
}
