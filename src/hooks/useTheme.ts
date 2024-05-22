import React from 'react';
import { ThemeContext } from '../providers/ThemeProvider';

export const useTheme = () => {
  const value = React.useContext(ThemeContext);
  return value;
};
