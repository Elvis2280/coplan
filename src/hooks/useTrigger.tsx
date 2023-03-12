import React, { useState } from 'react';

type Props = {
  initialBool?: boolean;
};

export default function useTrigger({ initialBool = false }: Props) {
  const [bool, setBool] = useState(initialBool);

  const setBoolTrue = () => {
    setBool(true);
  };
  const setBoolFalse = () => {
    setBool(false);
  };

  const triggerBool = () => {
    setBool((lastBool) => !lastBool);
  };
  return { bool, setBoolTrue, setBoolFalse, triggerBool };
}
