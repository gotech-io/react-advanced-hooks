import { useRef, forwardRef, useImperativeHandle } from 'react';

const InputWithForwardRefImperative = forwardRef((_, ref) => {
  const innerRef = useRef();
  useImperativeHandle(ref, () => ({
    focus: () => {
      innerRef.current.focus();
      innerRef.current.value = 'Focused!';
    },
  }));

  return <input className="our-custom-input-2" ref={innerRef} type="text" />;
});

const FocusInputWithForwardRefImperative = () => {
  const inputHTMLElement = useRef();

  const onClick = () => {
    inputHTMLElement.current.focus();
  };

  return (
    <>
      <InputWithForwardRefImperative ref={inputHTMLElement} />
      <button onClick={onClick}>Focus!</button>
    </>
  );
};

export default FocusInputWithForwardRefImperative;
