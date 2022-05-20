import React from "react";
import { useState } from "react";
import { useCounter } from "../hook/useCounter";

export const CounterWithHook = () => {

  const { value, handleAdd } = useCounter(100);


  return (
    <>
      <h3>
        CounterWithHook <small>{value}</small>
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
