import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react';

type initialStateType = {
  chat: boolean;
  cart: boolean;
  userProfile: boolean;
  notification: boolean;
};

type ScreenSizeType = number | undefined;

export type CreateContextType = {
  currentColor: string;
  setCurrentColor: Dispatch<SetStateAction<string>>;
  currentMode: string;
  setCurrentMode: Dispatch<SetStateAction<string>>;
  activeMenu: boolean;
  setActiveMenu: Dispatch<SetStateAction<boolean>>;
  screenSize: ScreenSizeType;
  setScreenSize: Dispatch<SetStateAction<ScreenSizeType>>;
  isClicked: initialStateType;
  initialState: initialStateType;
  setIsClicked: Dispatch<SetStateAction<initialStateType>>;
  handleClick: (clicked: string) => void;
  setColor: (color: string) => void;
  setMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
  themeSettings: boolean;
  setThemeSettings: Dispatch<SetStateAction<boolean>>;
};

const StateContext = createContext<CreateContextType | null>(null);

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false
};

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [screenSize, setScreenSize] = useState<ScreenSizeType>(undefined);
  const [currentColor, setCurrentColor] = useState('#03C9D7');
  const [currentMode, setCurrentMode] = useState('Light');
  const [themeSettings, setThemeSettings] = useState(false);
  const [activeMenu, setActiveMenu] = useState(true);
  const [isClicked, setIsClicked] = useState(initialState);

  const setMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.value);
    localStorage.setItem('themeMode', e.target.value);
  };

  const setColor = (color: string) => {
    setCurrentColor(color);
    localStorage.setItem('colorMode', color);
  };

  const handleClick = (clicked: string) =>
    setIsClicked({ ...initialState, [clicked]: true });

  return (
    <StateContext.Provider
      value={{
        currentColor,
        setCurrentColor,
        currentMode,
        setCurrentMode,
        activeMenu,
        setActiveMenu,
        screenSize,
        setScreenSize,
        themeSettings,
        setThemeSettings,
        handleClick,
        isClicked,
        initialState,
        setIsClicked,
        setMode,
        setColor
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () =>
  useContext(StateContext) as CreateContextType;
