import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue, StateType } from "./store";

function App() {
  const [value, setValue] = useState<number>(0);
  const count = useSelector((state: StateType) => state.count);

  const dispatch = useDispatch();

  const incrementByValueHandler = () => {
    setValue(0);
    dispatch(incrementByValue(value));
  };

  return (
    <div>
      <h1>Change Count</h1>
      <p>Count : {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button disabled={value < 0} onClick={incrementByValueHandler}>
        Increment By Value
      </button>
    </div>
  );
}

export default App;
