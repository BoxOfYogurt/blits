import '@emotion/react';
import { AppTheme } from './Theme';

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
