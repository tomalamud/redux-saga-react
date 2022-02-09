import "./styles.css";
import Counter from "./components/Counter";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUser } from "./redux/ducks/user";

// https://www.youtube.com/watch?v=1K26DIKt3w8

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  const user = useSelector((state) => state.user.user);
  const count = useSelector((state) => state.counter.count);
  const voters = [
    "tomas",
    "carlos",
    "charo",
    "matias",
    "Nico",
    "Fran",
    "Gastón"
  ];
  return (
    <div
      className="App"
      style={{ backgroundColor: "lightblue", margin: "10px" }}
    >
      {user && <h1>Hello, {user.name}</h1>}
      <h3>This is another counter: {count}</h3>
      {voters.map((voter) => (
        <Counter key={voter} name={voter} />
      ))}
    </div>
  );
}
