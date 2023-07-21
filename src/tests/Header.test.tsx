import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../redux';
import Header from '../components/Header';

test('Se é renderizado o valor inicial 0.00', () => {
  render(
    <Provider store={ store }>
      <Header />
    </Provider>,
  );
  const initialValue = screen.getByText('0.00');
  expect(initialValue).toBeInTheDocument();
});
test('Se é renderizado o valor inicial BRL', () => {
  render(
    <Provider store={ store }>
      <Header />
    </Provider>,
  );
  const initialRate = screen.getByText('BRL');
  expect(initialRate).toBeInTheDocument();
});
