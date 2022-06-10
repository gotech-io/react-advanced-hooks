import PropTypes from 'prop-types';
import { useReducer } from 'react';

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

const useCounter = (initialCount) => {
  const [state, dispatch] = useReducer(reducer, {
    count: initialCount ?? 0,
    totalClicks: 0,
  });

  return {
    totalClicks: state.totalClicks,
    count: state.count,
    decrement: () => dispatch({ type: 'decrement' }),
    increment: () => dispatch({ type: 'increment' }),
    reset: () => dispatch({ type: 'reset' }),
  };
};

const CounterReducerWithHook = ({ initialCount }) => {
  const { totalClicks, count, decrement, increment, reset } =
    useCounter(initialCount);

  return (
    <>
      <h2>Current Count: {count}</h2>
      <h3>Total Clicks: {totalClicks}</h3>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <button onClick={reset}>Reset</button>
    </>
  );
};

CounterReducerWithHook.propTypes = {
  initialCount: PropTypes.number.isRequired,
};

export default CounterReducerWithHook;
