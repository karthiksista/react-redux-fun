import { BUY_ICECREAM } from './iceCreamTypes';

const initialState = {
  numOfIceCreams: 500
};

const iceCreamReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 10
      };

    default:
      return state;
  }
};

export default iceCreamReducer;
