import { createContext, ReactNode, useState } from "react";

interface IThemeContexValues {
  isDarkMode: boolean;
  handleTheme: (isDarkMode: boolean) => void;
}
type ContextProps = {
  children: ReactNode;
};

export const ThemeProvider: React.FC<ContextProps> = ({
  children,
}: ContextProps) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = (isDarkMode: boolean) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContex.Provider value={{ isDarkMode, handleTheme }}>
      {children}
    </ThemeContex.Provider>
  );
};

export const ThemeContex = createContext<IThemeContexValues>({
  isDarkMode: false,
  handleTheme: (isDarkMode: boolean) => {},
});
