import { useState } from 'react';
function useInput(initialValue,validateFn) {
  const [value, setValue] = useState(initialValue);
  const [didEdit, setdidEdit] = useState(false);

  const isValid = !validateFn(value) && didEdit ;
  const handleChange = (event) => {
    setValue(event.target.value);
    setdidEdit(false);
  };
  const handleOnBlur = () => {
    setdidEdit(true);
  }

  

  return {
    value,
    onChange: handleChange,
    onBlur: handleOnBlur,
    hasError:isValid,
  };
}

export default useInput;
