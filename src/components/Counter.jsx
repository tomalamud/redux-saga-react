import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { increment, decrement } from "../redux/ducks/counter";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  const { name } = props;

  const handleDecrement = () => {
    if (count > 0) {
      dispatch(decrement());
      setCount(count - 1);
    }
  };
  const handleIncrement = () => {
    dispatch(increment());
    setCount(count + 1);
  };

  return (
    <div style={{ backgroundColor: "grey" }}>
      <h2>{name}</h2>
      <h3>My count is: {count}</h3>
      <button onClick={handleIncrement}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
    </div>
  );
};

export default Counter;
