import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
  fetchData,
} from "./redux/mySlice";

function App() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.myData.value);
  const data = useSelector((state) => state.myData.data);
  const status = useSelector((state) => state.myData.status);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>
        Increment by 5
      </button>

      <h2>Async Data</h2>
      {status === "loading" && <p>Loading...</p>}
      {status === "succeeded" &&
        data.map((item) => <p key={item.id}>{item.title}</p>)}
      {status === "failed" && <p>Error fetching data.</p>}
    </div>
  );
}

export default App;
