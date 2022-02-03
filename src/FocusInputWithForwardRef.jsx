import { useRef, forwardRef } from 'react';

const InputWithForwardRef = forwardRef((_, ref) => {
  return <input className="our-custom-input" ref={ref} type="text" />;
});

const FocusInputWithForwardRef = () => {
  const inputHTMLElement = useRef();

  const onClick = () => {
    inputHTMLElement.current.focus();
  };

  return (
    <>
      <InputWithForwardRef ref={inputHTMLElement} />
      <button onClick={onClick}>Focus!</button>
    </>
  );
};

export default FocusInputWithForwardRef;
