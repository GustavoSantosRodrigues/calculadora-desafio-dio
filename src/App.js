import { Container, Content, Row } from "./components/styles";
import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

const App = () => {
  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState(null);
  const [operation, setOperation] = useState(null);

  const handleClear = () => {
    setCurrentNumber("0");
    setFirstNumber(null);
    setOperation(null);
  };

  const handleClick = (number) => {
    setCurrentNumber((prev) => (prev === "0" ? number : prev + number));
  };

  const handleOperation = (op) => {
    setFirstNumber(currentNumber);
    setOperation(op);
    setCurrentNumber("0");
  };

  const handleEqual = () => {
    if (!firstNumber || !operation) return;

    const num1 = Number(firstNumber);
    const num2 = Number(currentNumber);
    let result = 0;

    switch (operation) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num2 === 0 ? "Erro" : num1 / num2;
        break;
      default:
        return;
    }

    setCurrentNumber(String(result));
    setFirstNumber(null);
    setOperation(null);
  };

  return (
    <Container>
      <Content>
        <Input value={currentNumber} />

        <Row>
          <Button label="C" onClick={handleClear} />
          <Button label="/" onClick={() => handleOperation("/")} />
          <Button label="*" onClick={() => handleOperation("*")} />
          <Button label="-" onClick={() => handleOperation("-")} />
        </Row>

        <Row>
          <Button label="7" onClick={() => handleClick("7")} />
          <Button label="8" onClick={() => handleClick("8")} />
          <Button label="9" onClick={() => handleClick("9")} />
          <Button label="+" onClick={() => handleOperation("+")} />
        </Row>

        <Row>
          <Button label="4" onClick={() => handleClick("4")} />
          <Button label="5" onClick={() => handleClick("5")} />
          <Button label="6" onClick={() => handleClick("6")} />
          <Button label="=" onClick={handleEqual} />
        </Row>

        <Row>
          <Button label="1" onClick={() => handleClick("1")} />
          <Button label="2" onClick={() => handleClick("2")} />
          <Button label="3" onClick={() => handleClick("3")} />
          <Button label="0" onClick={() => handleClick("0")} />
        </Row>
      </Content>
    </Container>
  );
};

export default App;
