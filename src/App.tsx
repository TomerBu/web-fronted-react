import "./App.scss";
import About from "./components/About/About";
import Button from "./components/Button";
import Counter from "./components/Counter/Counter";
import Header from "./components/Header/Header";
import Spinners from "./components/Spinners";

function App() {
  return (
    <div>
      <Button color="red" text="Hi"/>
      <Spinners />
      <About />
      <Header />
      <Counter />
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
