import { Box } from '@mui/material';
import { IHomeLogin } from '../../../types/types';
import { LoginForm } from './form/LoginForm';

export const HomeLogin = ({
  setActive,
  onRegistrationFormActive,
}: IHomeLogin) => {
  const closeModal = () => setActive(false);
  return (
    <Box className="sign-in-modal" onClick={closeModal}>
      <Box className="sign-in-content" onClick={(e) => e.stopPropagation()}>
        <Box className="sign-in-content__close-svg" onClick={closeModal}>
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <line
              x1="21.2131"
              y1="2.12132"
              x2="2.12125"
              y2="21.2132"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <line
              x1="1.5"
              y1="-1.5"
              x2="28.5"
              y2="-1.5"
              transform="matrix(0.707107 0.707107 0.707107 -0.707107 2.21313 0)"
              stroke="black"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </Box>
        <Box className="sign-in-content__typography">
          <p>Вход</p>
          <p onClick={onRegistrationFormActive}>Регистрация</p>
        </Box>
        <LoginForm />
      </Box>
    </Box>
  );
};
