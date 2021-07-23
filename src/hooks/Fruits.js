import React, { useReducer } from 'react';

const Fruits = () => {
  const initialState = {
    fruits: 2555
  };

  const reducer = (state = initialState, action) => {
    console.log('Fruit', state);
    console.log('action', action);

    switch (action) {
      case 'BUY_FRUITS':
        return {
          ...state,
          fruits: state.fruits - 10
        };

      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <h2> No Of Fruit - {state.fruits} </h2>
      <button onClick={() => dispatch('BUY_FRUITS')}> Buy Fruits </button>
    </>
  );
};

export default Fruits;
