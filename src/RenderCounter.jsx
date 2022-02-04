import { useState, useRef, useEffect } from 'react';

const RenderCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="render-counter">
      <div>
        <button onClick={() => setCount((prevCount) => prevCount + 1)}>
          You clicked me {count} times
        </button>
      </div>
      <div>
        <ChildOfRenderCounter />
      </div>
    </div>
  );
};

const ChildOfRenderCounter = () => {
  const [count, setCount] = useState(0);
  const renderCounter = useRef(1);

  useEffect(() => {
    renderCounter.current += 1;
  });

  return (
    <div className="child-of-render-counter">
      <div>I was rendered: {renderCounter.current} times</div>
      <button onClick={() => setCount((prev) => prev + 1)}>
        You clicked me {count} times
      </button>
    </div>
  );
};

export default RenderCounter;
