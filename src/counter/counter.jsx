import React from "react";
import Button from "/src/button/button";
import { StyledP, Value } from "./styled";

function Counter({ onChange, value, minValue }) {
  const disabledMins = value === minValue;
  return (
    <StyledP>
      Количество:
      <Button
        size="small"
        type="button"
        onClick={() => onChange && onChange(value + 1)}
      >
        +
      </Button>
      <Value
        value={value}
        size={1}
        onChange={(e) => {
          const value = Number(e.target.value);
          onChange(value < minValue ? minValue : value);
        }}
      />
      <Button
        size="small"
        disabled={disabledMins}
        type="button"
        onClick={() => onChange && onChange(value - 1)}
      >
        -
      </Button>
    </StyledP>
  );
}
export default Counter;
