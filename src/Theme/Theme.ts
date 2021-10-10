type GenericColors = 'grey' | 'blue' | 'green' | 'black';
type AccentColors = '';
type IconColors = 'light' | 'punch' | 'dark';

interface IPaletteColors {
  light: string;
  main: string;
  dark: string;
}

interface IIconColors {
  100: string;
  200: string;
  300: string;
}

type Palette<K extends GenericColors | IconColors> = {
  [key in K]: K extends IconColors ? IIconColors : IPaletteColors;
};

export type AppTheme = {
  palette: Palette<GenericColors>;
  popper: Palette<IconColors>;
  spacing: (arg: AppSpacing) => string;
};

const paletteColors: Palette<GenericColors> = {
  grey: {
    light: '#707070',
    main: '#292929',
    dark: '#141414',
  },
  blue: {
    light: '#262E3C',
    main: '#1D232E',
    dark: '#181D26',
    // 00233D
  },
  green: {
    light: '#2C423F',
    main: '#2C423F',
    dark: '#2C423F',
  },
  black: {
    light: '#141216',
    main: '#0A090B',
    dark: '#000103',
    //201A23
  },
};

const iconColors: Palette<IconColors> = {
  light: {
    100: '#7400b8',
    200: '#5c4d7d',
    '300': 'red',
  },
  punch: {
    100: '#04030F',
    200: '#2a9d8f',
    300: '#d00000',
  },
  dark: {
    '100': 'red',
    '200': 'red',
    '300': 'red',
  },
};

type AppSpacing =
  | 'xsmall'
  | 'small'
  | 'regular'
  | 'large'
  | 'xlarge'
  | 'massive';

const application_spacing = (arg: AppSpacing): string => {
  switch (arg) {
    case 'xsmall':
      return '0.5rem';
    case 'small':
      return '1rem';
    case 'regular':
      return '3rem';
    case 'large':
      return '5rem';
    case 'xlarge':
      return '10rem';
    case 'massive':
      return '20rem';
  }
};

export const ApplicationTheme: AppTheme = {
  palette: paletteColors,
  popper: iconColors,
  spacing: application_spacing,
};
