import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import AppContainer from "./components/appContainer/index.style";
import Wrapper from "./components/wrapper/index.style";
import Main from "./components/main/index.style";
import Menu from "./components/menu";
import Navbar from "./components/navbar";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utils/theme";
import Home from "./pages/home";
import SingleVideo from "./pages/singleVideo";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <AppContainer>
        <Router>
          <Menu darkMode={darkMode} setDarkMode={setDarkMode} />
          <Main>
            <Navbar />
            <Wrapper>
              <Routes>
                <Route path="/">
                  <Route index element={<Home />} />
                  <Route path="video">
                    <Route path=":id" element={<SingleVideo />} />
                  </Route>
                </Route>
              </Routes>
            </Wrapper>
          </Main>
        </Router>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;
