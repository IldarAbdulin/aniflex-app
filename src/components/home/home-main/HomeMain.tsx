import React from 'react';
import Cookies from 'js-cookie';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useAppDispatch } from '../../../hooks/useAppDispatch';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import Logo from '../../../assets/home/logo.png';
import { Button } from './button/Button';
import { HomeSignUp } from '../home-sign-up/HomeSignUp';
import { HomeLogin } from '../home-login/HomeLogin';
import { removeUser } from '../../../redux/slices/user-slice';

AOS.init();

export const HomeMain = () => {
  const dispatch = useAppDispatch();
  const [isLoginActive, setIsLoginActive] = React.useState<boolean>(false);
  const [isSignUpActive, setIsSignUpActive] = React.useState<boolean>(false);
  const [isLogin, setIsLogin] = React.useState<boolean>(false);
  const [userName, setUserName] = React.useState<string>('');

  const logout = () => {
    if (confirm('Вы уверены что хотите выйти из аккаунта ?')) {
      dispatch(removeUser());
      setIsLogin(false);
    }
  };

  const isAuthUser = () => {
    if (!isLogin) {
      alert('Вы должны быть авторизированы!');
    }
  };

  React.useEffect(() => {
    const username = Cookies.get('user');
    const token = Cookies.get('token');
    if (token && username) {
      setIsLogin(true);
      setUserName(`${username}`);
    }
  }, [dispatch, logout]);
  return (
    <>
      <Box className="home-main">
        <Box className="home-main__zerno">
          <Box className="home-main__shadow">
            <Box className="home-main__content">
              <Box
                data-aos="fade-down"
                data-aos-duration="500"
                className="home-main__content-header"
              >
                <Box className="home-main__content-header_logo">
                  <img src={Logo} alt="logo" />
                </Box>
                {isLogin ? (
                  <>
                    <Box className="home-main__content-header_p">
                      <p>{userName}</p>
                      <Button
                        className="home-main__content-header_p-btn"
                        onClick={logout}
                        title="Выйти"
                      />
                    </Box>
                  </>
                ) : (
                  <Box className="home-main__content-header_btns">
                    <button onClick={() => setIsLoginActive(true)}>Вход</button>
                    <button onClick={() => setIsSignUpActive(true)}>
                      Регисрация
                    </button>
                  </Box>
                )}
              </Box>
              <Box
                data-aos="fade-up"
                data-aos-duration="1000"
                className="home-main__content-text_content"
              >
                <h1>
                  Аниме, манга , манхва и многое другое совершенно{' '}
                  <span>бесплатно</span>
                </h1>
                <p>
                  Открой ворота в захватывающий мир аниме и соверши прыжок в
                  неизведанные истории! Нажми на кнопку и отправляйся в
                  атмосферу удивительных приключений!
                </p>
                <Link
                  style={{ textDecoration: 'none' }}
                  to={isLogin ? '/main' : ''}
                >
                  <Button
                    onClick={isAuthUser}
                    className="home-main__content-text_content-btn"
                    title="Перейти на страницу с аниме"
                    showArrow={true}
                  />
                </Link>
              </Box>
              {isLoginActive && (
                <HomeLogin
                  setActive={setIsLoginActive}
                  onRegistrationFormActive={() => {
                    setIsLoginActive(false);
                    setIsSignUpActive(true);
                  }}
                />
              )}
              {isSignUpActive && (
                <HomeSignUp
                  setActive={setIsSignUpActive}
                  onSignInFormActive={() => {
                    setIsLoginActive(true);
                    setIsSignUpActive(false);
                  }}
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
