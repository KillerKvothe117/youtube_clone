import "./App.css";
import Container from "./components/appContainer/index.style";
import Wrapper from "./components/wrapper/index.style"
import Main from "./components/main/index.style";
import Menu from "./components/menu";
import Navbar from "./components/navbar";

function App() {
  return (
    <Container>
      <Menu />
      <Main>
        <Navbar />
        <Wrapper>
          <h2>Test</h2>
        </Wrapper>
      </Main>
    </Container>
  );
}

export default App;
