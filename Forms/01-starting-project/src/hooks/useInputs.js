import { useState } from "react";

function validateValue(value, validators) {
  return validators.every((validator) => validator(value));
}

function useInputs(initialConfig) {
  const initializeState = () => {
    const state = {};
    for (const key in initialConfig) {
      state[key] = {
        value: initialConfig[key].value,
        isValid: validateValue(initialConfig[key].value, initialConfig[key].validators),
        touched: false,
      };
    }
    return state;
  };

  const [inputs, setInputs] = useState(initializeState);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const validators = initialConfig[name].validators;

    setInputs((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        value,
        isValid: validateValue(value, validators),
      },
    }));
  };

  const handleInputBlur = (e) => {
    const { name } = e.target;

    setInputs((prev) => ({
      ...prev,
      [name]: {
        ...prev[name],
        touched: true,
      },
    }));
  };

  const resetInputs = () => {
    setInputs(initializeState());
  };

  return [inputs, handleInputChange, handleInputBlur, resetInputs];
}

export default useInputs;
