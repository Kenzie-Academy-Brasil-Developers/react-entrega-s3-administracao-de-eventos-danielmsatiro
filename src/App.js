import { Section } from "./components/Section";
import { Routes } from "./routes";
import "./App.css";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <div className="app">
      <Section />
      <Routes />
      <GlobalStyle />
    </div>
  );
}

export default App;
