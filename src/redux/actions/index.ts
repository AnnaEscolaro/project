// Coloque aqui suas actions
import { Dispatch } from 'redux';
import { ExpensesType } from '../../types';

export const ADD_EMAIL = 'ADD_EMAIL';
export const ADD_EXPENSES = 'ADD_EXPENSES';
export const REQUEST_CURRENCY = 'REQUEST_CURRENCY';
export const REQUEST_CURRENCY_SUCCESS = 'REQUEST_CURRENCY_SUCCESS';
export const REQUEST_CURRENCY_ERROR = 'REQUEST_CURRENCY_ERROR';

export const REQUEST_RATE = 'REQUEST_RATE';
export const REQUEST_RATE_SUCCESS = 'REQUEST_RATE_SUCCESS';
export const REQUEST_RATE_ERROR = 'REQUEST_RATE_ERROR';

export const addEmail = (email: string) => ({
  type: ADD_EMAIL,
  payload: email,
});

export const requestCurrency = () => ({
  type: REQUEST_CURRENCY,
});

export const requestCurrencySucess = (currency: any) => ({
  type: REQUEST_CURRENCY_SUCCESS,
  payload: currency,
});

export const requestCurrencyError = (errorMessage: string) => ({
  type: REQUEST_CURRENCY_ERROR,
  payload: {
    errorMessage,
  },
});

export const fetchCurrency = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestCurrency());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const currencies = await response.json();
      delete currencies.USDT;
      const currNames = Object.keys(currencies);
      dispatch(requestCurrencySucess(currNames));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(requestCurrencyError(error.message));
      } else {
        dispatch(requestCurrencyError('Erro desconhecido ao buscar moeda'));
      }
    }
  };
};

export const addExpenses = ({
  id, value, description, currency, method, tag, exchangeRates }: ExpensesType) => ({
  type: ADD_EXPENSES,
  payload: {
    id, value, currency, method, tag, description, exchangeRates,
  },
});

export const requestRate = () => ({
  type: REQUEST_RATE,
});

export const requestRateSucess = (data: any) => ({
  type: REQUEST_RATE_SUCCESS,
  payload: data,
});

export const requestRateError = (errorMessage: string) => ({
  type: REQUEST_RATE_ERROR,
  payload: {
    errorMessage,
  },
});

export const fetchRate = () => {
  return async (dispatch: Dispatch) => {
    dispatch(requestRate());
    try {
      const response = await fetch('https://economia.awesomeapi.com.br/json/all');
      const data = await response.json();
      delete data.USDT;
      dispatch(requestRateSucess(data));
    } catch (error) {
      if (error instanceof Error) {
        dispatch(requestRateError(error.message));
      } else {
        dispatch(requestRateError('Erro desconhecido ao buscar moeda'));
      }
    }
  };
};
