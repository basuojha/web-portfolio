import React, {
  createContext,
  ReactNode,
  useEffect,
  useContext,
  useState,
} from "react";

interface GlobalContextType {
  isMobile: boolean;
  theme: string;
  setTheme: (theme: string) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

export const GlobalProvider = ({ children }: { children: ReactNode }) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);
  const [theme, setTheme] = useState<string>("light");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const props = {
    isMobile,
    theme,
    setTheme,
  };

  return (
    <GlobalContext.Provider value={props}>{children}</GlobalContext.Provider>
  );
};
export const useGlobalContext = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobalContext must be used within a GlobalProvider");
  }
  return context;
};
