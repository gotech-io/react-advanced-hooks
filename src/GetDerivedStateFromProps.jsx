import React, { useState, useRef, useMemo, useCallback } from 'react';

// Another interesting way to approach this is by setting state in the middle of a render.
const GetDerivedStateFromPropsChild2 = (props) => {
  const [innerCount, setInnerCount] = useState(0);
  const [outerCount, setOuterCount] = useState(0);

  if (outerCount !== props.count) {
    setInnerCount(props.count);
    setOuterCount(props.count);
  }

  const onClick = useCallback(() => {
    setInnerCount((prev) => prev + 1);
  }, []);

  return (
    <div className="state-props-child">
      <p>{innerCount}</p>
      <button onClick={onClick}>Increase Son! ({innerCount})</button>
    </div>
  );
};

const GetDerivedStateFromPropsChild = (props) => {
  const [_, causeRerender] = useState(true);
  const somethingElse = useRef();

  useMemo(() => {
    somethingElse.current = props.count;
  }, [props.count]);

  const onClick = useCallback(() => {
    somethingElse.current = somethingElse.current + 1;
    causeRerender((prev) => !prev);
  }, []);

  return (
    <div className="state-props-child">
      <p>{somethingElse.current}</p>
      <button onClick={onClick}>Increase Son! ({somethingElse.current})</button>
    </div>
  );
};

const GetDerivedStateFromProps = () => {
  const [count, setCount] = useState(0);

  const onClick = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <GetDerivedStateFromPropsChild count={count} />
      <button onClick={onClick}>Increase Parent! ({count})</button>
    </div>
  );
};

export default GetDerivedStateFromProps;
