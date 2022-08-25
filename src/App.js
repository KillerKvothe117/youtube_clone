import "./App.css";
import AppContainer from "./components/appContainer/index.style";
import Wrapper from "./components/wrapper/index.style";
import Main from "./components/main/index.style";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import { useState } from "react";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
        <Main>
          <Navbar />
          <Wrapper>
            <h2>Test</h2>
          </Wrapper>
        </Main>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
