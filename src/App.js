import "./App.css";
import WelcomeClass from "./components/day-one/WelcomeClass";
import WelcomeFunction from "./components/day-one/WelcomeFunction";
import ClockClass from "./components/day-three/ClockClass";
import CountStateClass from "./components/day-three/CountStateClass";
import CountStateFunction from "./components/day-three/CountStateFunction";
import ArrayAsPropsInClass from "./components/day-two/ArrayAsPropsInClass";
import ObjectAsProps from "./components/day-two/ObjectAsProps";
import ObjectAsPropsInClass from "./components/day-two/ObjectAsPropsInClass";

function App() {
  return (
    <div className="App">
      <CountStateClass />
      <hr />
      <CountStateFunction />
      <hr />
      <ClockClass />
    </div>
  );
}

export default App;
