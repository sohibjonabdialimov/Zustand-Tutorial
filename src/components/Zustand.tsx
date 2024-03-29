import { useEffect } from "react";
import { useCounter } from "../store";

const Zustand = () => {
  const getData = useCounter();
  const count = useCounter((state) => state.count);
  const increment = useCounter((state) => state.increment);
  const decrement = useCounter((state) => state.decrement);
  const reset = useCounter((state) => state.reset);
  const double = useCounter((state) => state.double);

  useEffect(() => {
    getData.setData();
  }, []);
  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>increment</button>
      <button onClick={() => double(2)}>double</button>
      <button onClick={decrement}>decrement</button>
      <button onClick={reset}>reset</button>
      <ul>
        {getData.data?.map((item) => (
          <li key={item?.id}>{item.description}</li>
        ))}
      </ul>
    </>
  );
};

export default Zustand;
