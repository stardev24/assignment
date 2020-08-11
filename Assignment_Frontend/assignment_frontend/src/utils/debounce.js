import  { useState, useEffect } from 'react';

// Debounce Hook

function CustomDebounce(value, delay) {
 
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(
    () => {

      const handler = setTimeout(() => {
        setDebounceVal(value);
      }, delay);

      return () => {
        clearTimeout(handler);
      };
    },[value,delay]);

  return debounceVal;
}

export default CustomDebounce