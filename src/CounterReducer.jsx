import { useReducer } from 'react';
import PropTypes from 'prop-types';

const init = (initialCount) => {
  return {
    count: initialCount,
    totalClicks: 0,
  };
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1, totalClicks: state.totalClicks + 1 };
    case 'decrement':
      return { count: state.count - 1, totalClicks: state.totalClicks + 1 };
    case 'reset':
      return { count: 0, totalClicks: state.totalClicks + 1 };
    default:
      throw new Error();
  }
};

const CounterReducer = ({ initialCount }) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    totalClicks: 0,
  });
  // or
  // const [state, dispatch] = useReducer(reducer, initialCount, init);

  return (
    <>
      <h2>Current Count: {state.count}</h2>
      <h3>Total Clicks: {state.totalClicks}</h3>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>
    </>
  );
};

CounterReducer.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default CounterReducer;
