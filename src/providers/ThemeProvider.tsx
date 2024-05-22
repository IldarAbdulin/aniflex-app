import React from 'react';
import { IContext } from '../types/types';

export const ThemeContext = React.createContext<IContext>({
  isLight: false,
  setIsLight: () => {},
});

export const ThemeProvider = ({ children }: React.PropsWithChildren) => {
  const [isLight, setIsLight] = React.useState<boolean>(false);
  const value = React.useMemo(() => ({ isLight, setIsLight }), [isLight]);
  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
};
