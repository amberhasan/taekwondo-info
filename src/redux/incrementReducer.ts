import {Alert} from 'react-native';

const initialState = {
  value: 0,
};

export const incrementReducer = (state = initialState, action) => {
  //   console.log('action', action);
  //   console.log('state', state);
  if (action.type === 'INCREMENT') {
    return {
      value: state.value + 1,
    };
  }
  return state;
};
