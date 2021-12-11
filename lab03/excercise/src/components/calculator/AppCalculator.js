import { useState, useEffect } from "react";
import NumberFormat from "react-number-format";

import "./Calculator.css";
  function AppCalculator() {
  const [preNumber, setPreNumber] = useState("");
  const [curNumber, setCurNumber] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curNumber.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreNumber("");
    }

    curNumber
      ? setCurNumber((pre) => pre + e.target.innerText)
      : setCurNumber(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curNumber);
  }, [curNumber]);

  useEffect(() => {
    setInput("0");
  }, []);
  
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curNumber === "") return;
    if (preNumber !== "") {
      handleResult();
    } else {
      setPreNumber(curNumber);
      setCurNumber("");
    }
  };

  const handleResult = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preNumber) / parseFloat(curNumber));
        break;

      case "+":
        cal = String(parseFloat(preNumber) + parseFloat(curNumber));
        break;
      case "X":
        cal = String(parseFloat(preNumber) * parseFloat(curNumber));
        break;
      case "-":
        cal = String(parseFloat(preNumber) - parseFloat(curNumber));
        break;
      case "%":
        cal = String(parseFloat(preNumber) % parseFloat(curNumber));
        break;
      default:
        return;
    }
    setInput("");
    setPreNumber(cal);
    setCurNumber("");
  };

  const minusPlus = () => {
    if (curNumber.charAt(0) === "-") {
      setCurNumber(curNumber.substring(1));
    } else {
      setCurNumber("-" + curNumber);
    }
  };


  const reset = () => {
    setPreNumber("");
    setCurNumber("");
    setInput("0");
  };
  return (
    <div className="container-calculator">
      <div className="wrapper-calculator">
        <div className="screen-calculator">
          {input !== "" || input === "0" ? (
            <NumberFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumberFormat
              value={preNumber}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <div className="btn light-gray" onClick={reset}>
          AC
        </div>
        <div className="btn light-gray" onClick={operatorType}>
          %
        </div>
        <div className="btn light-gray" onClick={minusPlus}>
          +/-
        </div>
        <div className="btn orange" onClick={operatorType}>
          /
        </div>
        <div className="btn" onClick={inputNum}>
          7
        </div>
        <div className="btn" onClick={inputNum}>
          8
        </div>
        <div className="btn" onClick={inputNum}>
          9
        </div>
        <div className="btn orange" onClick={operatorType}>
          X
        </div>
        <div className="btn" onClick={inputNum}>
          4
        </div>
        <div className="btn" onClick={inputNum}>
          5
        </div>
        <div className="btn" onClick={inputNum}>
          6
        </div>
        <div className="btn orange" onClick={operatorType}>
          -
        </div>
        <div className="btn" onClick={inputNum}>
          1
        </div>
        <div className="btn" onClick={inputNum}>
          2
        </div>
        <div className="btn" onClick={inputNum}>
          3
        </div>
        <div className="btn orange" onClick={operatorType}>
          +
        </div>
        <div className="btn zero" onClick={inputNum}>
          0
        </div>
        <div className="btn" onClick={inputNum}>
          .
        </div>
        <div className="btn" onClick={handleResult}>
          =
        </div>
      </div>
    </div>
  );
}

export default AppCalculator;
