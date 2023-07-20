// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
import { AnyAction } from 'redux';
import {
  REQUEST_CURRENCY,
  REQUEST_CURRENCY_SUCCESS,
  REQUEST_CURRENCY_ERROR,
  ADD_EXPENSES,
} from '../actions';

const INITIAL_STATE = {
  currencies: [], // array de string
  expenses: [], // array de objetos, com cada objeto tendo as chaves id, value, currency, method, tag, description e exchangeRates
  editor: false, // valor booleano que indica se uma despesa está sendo editada
  idToEdit: 0, // valor numérico que armazena o id da despesa que está sendo editada
};

const wallet = (
  state = INITIAL_STATE,
  action: AnyAction,
) => {
  switch (action.type) {
    case REQUEST_CURRENCY: {
      return {
        ...state,
        isLoading: true,
      };
    }
    case REQUEST_CURRENCY_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        currencies: action.payload,
      };
    }
    case ADD_EXPENSES: {
      return {
        ...state,
        expenses: [...state.expenses, action.payload],
      };
    }
    case REQUEST_CURRENCY_ERROR: {
      return {
        ...state,
        isLoading: false,
        errorMessage: action.payload.errorMessage,
      };
    }
    default: return state;
  }
};

export default wallet;
