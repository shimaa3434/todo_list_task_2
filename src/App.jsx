
import './App.css'
import Todo from './Components/Todo'
import { createContext,  useState } from "react";


export const themeContext = createContext();

const ThemeProvider = ({ children }) => {

    const [themeState, setThemeState] = useState("light");

    const toggle = () => {
        setThemeState(() =>
            themeState === "light" ? "dark" : "light"
        );
};

    return (
        <themeContext.Provider value={{ themeState, toggle }}>
            {children}
        </themeContext.Provider>
    );
};

function App() {
  return (
    <>
    <ThemeProvider>
      <Todo />
    </ThemeProvider>

    </>
  )
}

export default App
