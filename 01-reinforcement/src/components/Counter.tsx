import React from "react";
import { useState } from "react";

export const Counter = () => {
  const [value, setValue] = useState<number>(10);

  const handleAdd = (numberAdd: number): void => {
    setValue(value + numberAdd);
  };

  return (
    <>
      <h3>
        Counter <small>{value}</small>
      </h3>
      <button className="btn btn-primary" onClick={() => handleAdd(1)}>
        + 1
      </button>
      &nbsp;
      <button className="btn btn-primary" onClick={() => handleAdd(-1)}>
        - 1
      </button>
    </>
  );
};
