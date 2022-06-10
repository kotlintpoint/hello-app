import "./App.css";
import WelcomeClass from "./components/day-one/WelcomeClass";
import WelcomeFunction from "./components/day-one/WelcomeFunction";
import ArrayAsPropsInClass from "./components/day-two/ArrayAsPropsInClass";
import ObjectAsProps from "./components/day-two/ObjectAsProps";
import ObjectAsPropsInClass from "./components/day-two/ObjectAsPropsInClass";

function App() {
  function welcome(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  const user = {
    firstName: "Sachin",
    lastName: "Tendulkar",
    email: "sachin@gmail.com",
    age: 27,
  };

  const data = ["Apple", "Banana", "Mango", "Grapes", "Watermelon"];

  const heading = <h1>Hello, {welcome(user)}</h1>;
  const message = "Good Morning WelcomeClass";

  return (
    <div className="App">
      {heading}
      <hr />
      <WelcomeClass msg={message} />
      <hr />
      <WelcomeClass msg="Learning React JS!!!" />
      <hr />
      <WelcomeFunction msg="Good Evening WelcomeFunction" />
      <hr />
      <WelcomeFunction msg="Learning Node JS!!!" />
      <hr />
      <ObjectAsProps user={user} />
      <hr />
      <ObjectAsPropsInClass user={user} />
      <hr />
      <ArrayAsPropsInClass data={data} />
    </div>
  );
}

export default App;
