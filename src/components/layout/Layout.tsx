import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '../../hooks/useTheme';

export const Layout = ({ children }: React.PropsWithChildren) => {
  const { isLight } = useTheme();
  return (
    <Box className={isLight === true ? 'layout light' : 'layout'}>
      {children}
    </Box>
  );
};
