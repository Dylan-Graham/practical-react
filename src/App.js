import "./App.css";
import { Body } from "./components/Body";
import { Header } from "./components/Header";

const App = () => {
  const headerTitle = "Whatsup, I'm the header title";

  function add(a, b) {
    return a + b;
  }

  return (
    <div className="App">
      <Header title={headerTitle} num1={5} num2={4} add={add} />
      <Body bodyText="body's text" bodyObj={{ a: 5, b: 4 }} />
    </div>
  );
};

export default App;
