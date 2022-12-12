declare module '@mui/material/styles' {
  export interface Palette {
    accent: Palette['primary'];
    input: Palette['primary'];
  }
  export interface PaletteOptions {
    accent: PaletteOptions['primary'];
    input: PaletteOptions['primary'];
  }

  export interface PaletteColor {
    darker?: string;
    accent: PaletteColor;
  }
}

export {};
