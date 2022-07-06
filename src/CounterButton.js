import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getNumberofClicks } from './selectors';
import { counterButtonClicked } from './actions';

export const CounterButton = () => {
  const numberOfClicks = useSelector(getNumberofClicks);
  const dispatch = useDispatch();
  const [incrementBy, SetIncrementBy] = useState(1);

  return (
    <>
      <p>You have clicked the button {numberOfClicks} times.</p>
      <label>
        {' '}
        Set Increment By:
        <input
          value={incrementBy}
          onChange={e => SetIncrementBy(Number(e.target.value))}
          type="number"
        />
      </label>
      <button onClick={() => dispatch(counterButtonClicked(incrementBy))}>
        Click
      </button>
    </>
  );
};
