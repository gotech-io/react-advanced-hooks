import { useRef } from 'react';

const FocusInput = () => {
  const inputHTMLElement = useRef();

  const onClick = () => {
    inputHTMLElement.current.focus();
  };

  return (
    <>
      <input ref={inputHTMLElement} type="text" />
      <button onClick={onClick}>Focus!</button>
    </>
  );
};

export default FocusInput;
