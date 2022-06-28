import { createContext, useState } from "react";

interface ThemeContexProps {
  isDarkMode: boolean;
  handleTheme: (isDarkMode: boolean) => void;
}

export function ThemeProvider({ children }: any) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleTheme = (isDarkMode: boolean) => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContex.Provider value={{ isDarkMode, handleTheme }}>
      {children}
    </ThemeContex.Provider>
  );
}

export const ThemeContex = createContext<ThemeContexProps>({
  isDarkMode: false,
  handleTheme: (isDarkMode: boolean) => {},
});
