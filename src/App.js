import "./App.css";
import WelcomeClass from "./components/day-one/WelcomeClass";
import WelcomeFunction from "./components/day-one/WelcomeFunction";

function App() {
  function welcome(user) {
    return `${user.firstName} ${user.lastName}`;
  }

  const user = {
    firstName: "Sachin",
    lastName: "Tendulkar",
  };

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
    </div>
  );
}

export default App;
