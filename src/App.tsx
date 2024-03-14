import "./App.scss";
import About from "./components/About/About";
import Button from "./components/Button";
import Card from "./components/Card/Card";
import Counter from "./components/Counter/Counter";
import FlexRow from "./components/Flex/FlexRow";
import Header from "./components/Header/Header";
import Input from "./components/Input/Input";
import Spinners from "./components/Spinners";

function App() {
  return (
    <div>
      <Input label="Name" placeholder="Enter your name"/>
      <Card>
        <FlexRow className="gap-4">
          <h2>Jack Of Spades</h2>
          <p>Jack Of Spades</p>
        </FlexRow>
      </Card>

      <Card>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
      </Card>

      <Card>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
        <p>Jack Of Spades</p>
      </Card>
      <Button
        variant="info"
        onClick={() => {
          alert("hi");
        }}
        text="Hi"
      />

      <Spinners />
      <About />
      <Header />
      <Counter />
      <h1>Hello World</h1>

      <div>
        <p>hello!</p>
      </div>
    </div>
  );
}

export default App;
