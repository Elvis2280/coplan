import React, { useEffect, useState } from 'react';

export default function usePorcentInputControl() {
  const [inputsPorcent, setInputsPorcent] = useState({
    totalPorcent: 0,
    ahorroPorcent: 0,
    entretenimientoPorcent: 0,
    gastosPorcent: 0,
  });

  const [inputBySalary, setInputBySalary] = useState({
    gastos: 0,
    entretenimiento: 0,
    ahorro: 0,
  });

  const [isFullPorcent, setIsFullPorcent] = useState(false);

  useEffect(() => {
    checkCompletePorcent();
  }, [inputsPorcent.totalPorcent]); // return true if the 100% of the salary is used

  const onBlurHandler = () => {
    const currentTotalPorcent =
      inputsPorcent.ahorroPorcent +
      inputsPorcent.entretenimientoPorcent +
      inputsPorcent.gastosPorcent;
    setInputsPorcent({ ...inputsPorcent, totalPorcent: currentTotalPorcent });
  }; // when user leave the field set total porcent to the state

  const onChangeHandler = (
    val: string,
    inputName: 'ahorroPorcent' | 'entretenimientoPorcent' | 'gastosPorcent',
  ) => {
    const valToNumber = Number(val.replace('% ', ''));

    const tempObjInputs = inputsPorcent;
    if (valToNumber <= 100 - inputsPorcent.totalPorcent) {
      //@ts-ignore
      tempObjInputs[inputName] = valToNumber;
      setInputsPorcent({ ...tempObjInputs });
      return '% ' + valToNumber;
    } else {
      tempObjInputs[inputName] = 0;
      setInputsPorcent({ ...tempObjInputs });

      onBlurHandler();
      return '% ' + 0;
    }
  }; // depend the field set that % to the object property

  const generateMoneyOnFieldByPorcent = (money: number) => {
    setInputBySalary({
      gastos: money * (inputsPorcent.gastosPorcent / 100),
      entretenimiento: money * (inputsPorcent.entretenimientoPorcent / 100),
      ahorro: money * (inputsPorcent.ahorroPorcent / 100),
    });
  }; // calculate the money by porcent and salary

  const checkCompletePorcent = () => {
    setIsFullPorcent(inputsPorcent.totalPorcent === 100);
  };

  return {
    onChangeHandler,
    onBlurHandler,
    checkCompletePorcent,
    generateMoneyOnFieldByPorcent,
    isFullPorcent,
    inputsPorcent,
    inputBySalary,
  };
}
