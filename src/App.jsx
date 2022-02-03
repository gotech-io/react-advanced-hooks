import React from 'react';
import useWindowSize from './useWindowSize';
import CounterReducer from './CounterReducer';
import FocusInput from './FocusInput';
import RenderCounter from './RenderCounter';
import FocusInputWithForwardRef from './FocusInputWithForwardRef';
import FocusInputWithForwardRefImperative from './FocusInputWithForwardRefImperative';

import './App.css';

const App = () => {
  const { innerHeight, innerWidth } = useWindowSize();

  return (
    <div className="App">
      <div className="size-display">
        {innerWidth} x {innerHeight}
      </div>
      <div>
        <CounterReducer initialCount={0} />
        <hr />
        <FocusInput />
        <hr />
        <FocusInputWithForwardRef />
        <hr />
        <FocusInputWithForwardRefImperative />
        <hr />
        <RenderCounter />
        <hr />
        <a href="https://codesandbox.io/s/useeffect-flicker-example-forked-xc7ry">
          useEffect Flicker Demo
        </a>
      </div>
    </div>
  );
};

export default App;
