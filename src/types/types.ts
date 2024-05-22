interface IRoutesChilder {
  path: string;
  element: React.ReactElement;
}

export interface IPublicRoutes {
  children: IRoutesChilder[];
}
export interface IContext {
  isLight: boolean;
  setIsLight?: (arg: boolean) => void;
}
export interface IHomeSignUp {
  setActive: (active: boolean) => void;
  onSignInFormActive: () => void;
}
export interface IHomeLogin {
  setActive: (a: boolean) => void;
  onRegistrationFormActive: () => void;
}
export interface IMangaHeader {
  isLight: boolean;
  userName: string;
  changeTheme: () => void;
}
export interface IMangaMenu {
  setActive: (act: boolean) => void;
}
