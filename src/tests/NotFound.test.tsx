import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from '../redux';
import NotFound from '../pages/NotFound';

test('Renderiza o texto Página não encontrada', () => {
  render(
    <BrowserRouter>
      <Provider store={ store }>
        <NotFound />
      </Provider>
    </BrowserRouter>,
  );
  const text = screen.getByText('Página não encontrada');
  expect(text).toBeInTheDocument();
});
