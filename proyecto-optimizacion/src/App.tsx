import React, { FC, useState, useMemo } from "react";
import ItemList from "./component/ItemList";

const App: FC = () => {
  const [count, setCount] = useState<number>(0);

  // Memoriza la lista de items
  const items = useMemo(() => {
    return Array.from({ length: 1000 }, (_, i) => `Item ${i}`);
  }, []);

  return (
    <div>
      <h1>Profiling en React</h1>
      <button onClick={() => setCount(count + 1)}>
        Incrementar ({count})
      </button>
      <ItemList items={items} />
    </div>
  );
};
// const App: FC = () => {

//   const [count, setCount] = useState<number>(0);
//   const [items, _setItems] = useState<string[]>(
//   Array.from({ length: 1000 }, (_, i) => `Item ${i}`));
//   debugger;
//   return (
//     <div>
//     <h1>Profiling en React</h1>
//     <button onClick={() => setCount(count + 1)}>Incrementar ({count})</button>
//     <ItemList items={items} />
//     </div>
//     );
//    };

export default App;
