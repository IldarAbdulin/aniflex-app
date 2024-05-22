import { useAppSelector } from './useAppSelector';

export const useAuth = () => {
  const { email, id, token, isAuthenticated } = useAppSelector(
    ({ user }) => user
  );
  return {
    isAuth: !!email,
    email,
    token,
    id,
    isAuthenticated,
  };
};
