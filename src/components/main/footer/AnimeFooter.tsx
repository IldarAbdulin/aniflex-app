import { Box } from '@mui/material';
import DarkLogo from '../../../assets/home/dark-logo.png';
import Logo from '../../../assets/home/logo.png';
import { useTheme } from '../../../hooks/useTheme';

export const AnimeFooter = () => {
  const { isLight } = useTheme();
  return (
    <Box sx={{ padding: '10px 0', height: '25vh' }}>
      <hr />
      <Box className="manga__footer">
        <Box className="manga__footer__logo">
          <img src={isLight ? DarkLogo : Logo} alt="logo" />
        </Box>
        <Box className="manga__footer__links">
          <a href="#">Связаться с нами</a>
          <a href="#">Соглашение</a>
          <a href="#">Конфиденциальность</a>
        </Box>
      </Box>
    </Box>
  );
};
