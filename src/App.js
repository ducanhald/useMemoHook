import { useMemo, useState, useRef } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [array, setArray] = useState([]);
  const nameRef = useRef();
  const handleSubmit = () => {
    setArray((pre) => [...pre, { name: name, price: Number(price) }]);
    setName("");
    setPrice("");
    nameRef.current.focus();
  };
  const result = useMemo(() => {
    const total = array.reduce((total, current) => {
      return total + current.price;
    }, 0);
    return total;
  }, [array]);

  return (
    <div className="App" style={{ margin: 50 }}>
      <input
        ref={nameRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input value={price} onChange={(e) => setPrice(e.target.value)} />
      <button onClick={handleSubmit}>SubMit</button>
      Total :{result}
      <ul>
        {array.map((item, index) => {
          return (
            <li key={index}>
              {item.name} {item.price}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
