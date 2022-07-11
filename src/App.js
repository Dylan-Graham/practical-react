import "./App.css";
import { Body } from "./components/Body";
import { MyFirstButton } from "./components/Button";
import { CarbonCalculator } from "./components/CarbonCalculator";
import { Counter } from "./components/Counter";
import { Header } from "./components/Header";

const App = () => {
  const headerTitle = "Whatsup, I'm the MacKay Carbon Calculator";

  function add(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <Header title={headerTitle} num1={5} num2={4} add={add} />
      <Body bodyText="body's text" bodyObj={{ a: 5, b: 4 }} />
      <Counter></Counter>
      <MyFirstButton></MyFirstButton>
      <CarbonCalculator></CarbonCalculator>
    </div>
  );
};

export default App;
