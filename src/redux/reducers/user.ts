// Esse reducer será responsável por tratar as informações da pessoa usuária
import { AnyAction } from 'redux';
import { ADD_EMAIL } from '../actions';

const INITIAL_STATE = {
  email: '', // string que armazena o e-mail da pessoa usuária
};

const user = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case ADD_EMAIL: {
      return {
        ...state,
        email: action.payload,
      };
    }
    default: return state;
  }
};

export default user;
