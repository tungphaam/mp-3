import { useState } from 'react';

export function useCalculator() {
    const [firstNumber, setFirstNumber] = useState<string>('');
    const [secondNumber, setSecondNumber] = useState<string>('');
    const [result, setResult] = useState<string>('');

    const getValues = (): [number, number] => {
        return [parseFloat(firstNumber), parseFloat(secondNumber)];
    };

    const displayResult = (value: number) => {
        setResult(String(value));
    };

    const add = () => {
        const [a, b] = getValues();
        displayResult(a + b);
    };

    const subtract = () => {
        const [a, b] = getValues();
        displayResult(a - b);
    };

    const multiply = () => {
        const [a, b] = getValues();
        displayResult(a * b);
    };

    const divide = () => {
        const [a, b] = getValues();
        displayResult(a / b);
    };

    const power = () => {
        const [base, exp] = getValues();
        let value = 1;
        for (let i = 0; i < exp; i++) {
            value *= base;
        }
        displayResult(value);
    };

    const clear = () => {
        setFirstNumber('');
        setSecondNumber('');
        setResult('');
    };

    const isNegative = parseFloat(result) < 0;

    return {
        firstNumber,
        setFirstNumber,
        secondNumber, 
        setSecondNumber,
        result,
        isNegative,
        add,
        subtract,
        multiply,
        divide,
        power,
        clear,
    };
}
