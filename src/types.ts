import { AnyAction } from 'redux';
import { ThunkDispatch } from 'redux-thunk';

export type UserType = {
  user: {
    email: string;
  }
};

export type ExpensesType = {
  id: number,
  value: string,
  description: string,
  currency: string,
  method: string,
  tag: string,
  exchangeRates: object,
};

export type DispatchType = ThunkDispatch<GlobalState, null, AnyAction>;

export type GlobalState = {
  user: {
    email: ''
  },
  wallet: {
    currencies: string[],
    expenses: [],
    editor: boolean,
    idToEdit: number,
    isLoading: boolean,
  }
};
