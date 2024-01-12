import React, { useState } from 'react';
import Input from './components/Input';
import Button from './components/Button';
import { Container, Content, Row } from './styles';

const App = () => {
  const [currentNumber, setCurrentNumber] = useState('0');
  const [firstNumber, setFirstNumber] = useState('0');
  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('+')
  };
  const [operation, setOperation] = useState('');

  const handleAddNumber = (num) => {
    setCurrentNumber(prev => prev === '0' ? `${num}` : `${prev}${num}`);
  }

  const handleOperation = (operator) => {
    if (firstNumber === '0') {
      setFirstNumber(currentNumber);
      setCurrentNumber('0');
      setOperation(operator);
    } else {
      const result =
        operator === '+' ? Number(firstNumber) + Number(currentNumber) :
          operator === '-' ? Number(firstNumber) - Number(currentNumber) :
            operator === '*' ? Number(firstNumber) * Number(currentNumber) :
              operator === '/' ? Number(firstNumber) / Number(currentNumber) :
                // Adicione outros casos conforme necessário
                0;

      setCurrentNumber(String(result));
      setOperation('');
    }
  };

  const handleSumNumbers = () => {
    handleOperation('+');
  };

  const handleMinusNumbers = () => {
    handleOperation('-');
  };

  const handleVersusNumbers = () => {
    handleOperation('*');
  };

  const handleDivideNumbers = () => {
    handleOperation('/');
  };

  const handleEquals = () => {
    if (!(firstNumber === '0') && operation !== '' && currentNumber !== '0') {
      handleOperation(operation);
    }
  };




  return (
    <Container>
      <Content>
        <Input value={currentNumber} />
        <Row>
          <Button label="*" onClick={handleVersusNumbers} />
          <Button label="0" onClick={() => handleAddNumber('0')} />
          <Button label="C" onClick={handleOnClear} />
          <Button label="/" onClick={handleDivideNumbers} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} />
          <Button label="8" onClick={() => handleAddNumber('8')} />
          <Button label="9" onClick={() => handleAddNumber('9')} />
          <Button label="-" onClick={handleMinusNumbers} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} />
          <Button label="5" onClick={() => handleAddNumber('5')} />
          <Button label="6" onClick={() => handleAddNumber('6')} />
          <Button label="+" onClick= {handleSumNumbers} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} />
          <Button label="2" onClick={() => handleAddNumber('2')} />
          <Button label="3" onClick={() => handleAddNumber('3')} />
          <Button label="=" onClick={handleEquals} />
        </Row>



      </Content>

    </Container>
  );
}

export default App;
