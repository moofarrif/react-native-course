import { Counter } from "./components/Counter";
import { CounterWithHook } from "./components/CounterWithHook";
import { Forms } from "./components/Forms";
import { Login } from './components/Login';
import { Users } from "./components/Users";

const App = () => {

  return (
    <>
      <div className="mt-2">
        <h1>Introduction TS - React</h1>
        <hr />
        {/* <Counter /> */}
        {/* <CounterWithHook /> */}
        {/* <Login /> */}
        {/* <Users /> */}
        <Forms />
      </div>
    </>
  );
};

export default App;
