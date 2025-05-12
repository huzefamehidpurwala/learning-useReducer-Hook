import { useReducer } from "react";
import "./App.css";

type IReducerAction = { type: "increment" | "decrement" | "reset" };
const reducer = (state: number, action: IReducerAction): number => {
  switch (action.type) {
    case "increment":
      return ++state;
    case "decrement":
      return --state;
    case "reset":
    default:
      return 0;
  }
};

function App() {
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h5>Counts: {count}</h5>
      <div className="flex gap-x-2">
        <button
          type="button"
          className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-blue-600 bg-blue-500 hover:bg-blue-400"
          onClick={() => dispatch({ type: "increment" })}
        >
          Increment
        </button>
        <button
          type="button"
          className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-gray-600 bg-gray-500 hover:bg-gray-400"
          onClick={() => dispatch({ type: "decrement" })}
        >
          Decrement
        </button>
        <button
          type="button"
          className="focus:outline-black text-white text-sm py-2.5 px-4 border-b-4 border-green-600 bg-green-500 hover:bg-green-400"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
