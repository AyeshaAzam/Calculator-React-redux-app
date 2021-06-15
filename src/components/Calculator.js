import React from "react";
import styled from "styled-components";

//Box-sizing: It prevents your boxes from growing
//https://css-tricks.com/snippets/css/complete-guide-grid/
//figma.com --- check for design


const Calculator = () => {
  return (
    <Wrapper>
      <Settings>
        <h2>Calc</h2>
      </Settings>
      <Input type="number" placeholder="0" />
      <Buttons>
        <Button>7</Button>
        <Button>6</Button>
        <Button>9</Button>
        <DeleteButton>Del</DeleteButton>
        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>
        <Button>+</Button>
        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>
        <Button>-</Button>
        <Button>.</Button>
        <Button>0</Button>
        <Button>/</Button>
        <Button>*</Button>
        <ResetButton>
          <p>Reset</p>
        </ResetButton>
        <EqualsButton>
          <p> = </p>
        </EqualsButton>
      </Buttons>
    </Wrapper>
  );
};

export default Calculator;

const Wrapper = styled.div`
  // background-color: pink;
  width: 540px;
  height: 708px;
  margin-top: 75px;
`;

const Settings = styled.div`
// background-color: green;
  width: 540px;
  height: 44px;
  color: white;
  display: flex;

  h2 {
    font-family: Spartan;
    font-size: 32px;
    font-weight; 700;
    line-height: 36px;
    text-align: center;
    font-style:normal;
    letter-spacing: -0.53px;
  }
`;

const Input = styled.input`
  background-color: #181f33;
  width: 100%;
  box-sizing: border-box;
  height: 128px;
  border-radius: 8px;
  margin-bottom: 15px;
  text-align: right;
  color: white;
  font-size: 50px;
  border: none;
  padding; 25px;

  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;

const Buttons = styled.div`
  background-color: #242d44;
  width: 100%;
  // height: 100%;
  padding: 25px;
  border-radius: 8px;

  display: grid;
  justify-items: center;

  // grid-template-rows: 1fr 1fr 1fr 1fr 1fr;   //40px 40px 40px 40px 40px;
  // grid-template-columns: 1fr 1fr 1fr 1 fr;   // 40px 40px 40px 40px 40px;

  // grid-template-rows: repeat(5, 1fr);
  // grid-template-columns: repeat( 4, 1fr);

  grid-template: repeat(5, 1fr) / repeat(4, 1fr);  // try : repeat(2, 1fr); --- it will give you 2 columns
  grid-gap: 15px;

  p {
      font-family: Spartan;
      font-size: 20px;
      font-weight; 700;
      line-height: 22px;
      text-align: center;
      font-style:normal;
      letter-spacing: -0.3333333432674408px;
      text-align: center;
  }
`;

const Button = styled.div`
  background-color: #eae3dc;
  font-size: 25px;
  border-radius: 6px;
  width: 100%;
  height: 64px;

  color: #434a59;
  transition: 0.3s;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    background-color: aquamarine;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #647198;
  color: white;
`;

const ResetButton = styled(Button)`
  background-color: #647198;
  grid-column: span 2;
  width: 100%;
  color: white;
`;

const EqualsButton = styled(Button)`
  background-color: #d03f2f;
  grid-column: span 2;
  width: 100%;
  color: white;
`;
