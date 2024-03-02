import { useState } from "react";
import "./App.css";
import Rate from "./components/Rate/Rate";
import Result from "./components/Submit/Submit";

function App() {
  const [submit, setSubmit] = useState(true);
  const [rate, setRate] = useState(null);
  return (
    <>
      {submit ? (
        <Rate setSubmit={setSubmit} rate={rate} setRate={setRate} />
      ) : (
        <Result rate={rate} />
      )}{" "}
    </>
  );
}

export default App;
