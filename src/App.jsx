import React from 'react';
import useWindowSize from './useWindowSize';
import CounterReducer from './CounterReducer';
import CounterReducerWithHook from './CounterReducerWithHook';
import FocusInput from './FocusInput';
import RenderCounter from './RenderCounter';
import FocusInputWithForwardRef from './FocusInputWithForwardRef';
import FocusInputWithForwardRefImperative from './FocusInputWithForwardRefImperative';
import GetDerivedStateFromProps from './GetDerivedStateFromProps';
import FormWithRef from './FormWithRef';
import FormWithState from './FormWithState';

import './App.css';

const App = () => {
  const { innerHeight, innerWidth } = useWindowSize();

  return (
    <div className="App">
      <div className="size-display">
        {innerWidth} x {innerHeight}
      </div>
      <div>
        <u>CounterReducer.jsx</u>
        <CounterReducer initialCount={0} />
        <hr />
        <u>CounterReducerWithHook.jsx</u>
        <CounterReducerWithHook initialCount={0} />
        <hr />
        <a href="https://codesandbox.io/s/useeffect-flicker-example-forked-xc7ry">
          useEffect Flicker Demo
        </a>
        <hr />
        <u>FocusInput.jsx</u>
        <FocusInput />
        <hr />
        <u>FocusInputWithForwardRef.jsx</u>
        <FocusInputWithForwardRef />
        <hr />
        <u>FocusInputWithForwardRefImperative.jsx</u>
        <FocusInputWithForwardRefImperative />
        <hr />
        <u>RenderCounter.jsx</u>
        <RenderCounter />
        <hr />
        <u>GetDerivedStateFromProps.jsx</u>
        <GetDerivedStateFromProps />
        <hr />
        <u>FormWithRef.jsx</u>
        <FormWithRef />
        <hr />
        <u>FormWithState.jsx</u>
        <FormWithState />
      </div>
    </div>
  );
};

export default App;
