import "./App.css";
import ProductsData from "./components/day-eight/ProductsData";
import FormEvent from "./components/day-five/FormEvent";
import FruitInputEvent from "./components/day-five/FruitInputEvent";
import InputMessageEvent from "./components/day-five/InputMessageEvent";
import LifecyclerContainer from "./components/day-four/LifecyclerContainer";
import FragementExample from "./components/day-nine/FragementExample";
import Greetings from "./components/day-nine/Greetings";
import WelcomeClass from "./components/day-one/WelcomeClass";
import WelcomeFunction from "./components/day-one/WelcomeFunction";
import UserTableForm from "./components/day-seven/UserTableForm";
import UserForm from "./components/day-six/UserForm";
import ClockClass from "./components/day-three/ClockClass";
import CountStateClass from "./components/day-three/CountStateClass";
import CountStateFunction from "./components/day-three/CountStateFunction";
import ArrayAsPropsInClass from "./components/day-two/ArrayAsPropsInClass";
import ObjectAsProps from "./components/day-two/ObjectAsProps";
import ObjectAsPropsInClass from "./components/day-two/ObjectAsPropsInClass";

function App() {
  return (
    <div className="App">
      {/* <ProductsData /> */}
      <FragementExample />
      <hr />
      <Greetings name={"Ankit"} age={25} />
    </div>
  );
}

export default App;
