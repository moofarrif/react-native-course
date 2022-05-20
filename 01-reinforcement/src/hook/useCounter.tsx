import { useState } from "react";

export const useCounter = ( defaultValue:number = 10) => {
  const [value, setValue] = useState<number>(defaultValue);

  const handleAdd = (numberAdd: number): void => {
    setValue(value + numberAdd);
  };

  return { value, handleAdd };
};
