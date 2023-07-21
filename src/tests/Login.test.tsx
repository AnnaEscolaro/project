import { screen } from '@testing-library/dom';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import store from '../redux';
import Login from '../pages/Login';
import App from '../App';

test('Se é renderizado um input de e-mail', () => {
  render(
    <BrowserRouter>
      <Provider store={ store }>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  const initialValue = screen.getByPlaceholderText('E-mail');
  expect(initialValue).toBeInTheDocument();
});

test('Se é renderizado um input de senha', () => {
  render(
    <BrowserRouter>
      <Provider store={ store }>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  const initialValue = screen.getByPlaceholderText('Senha');
  expect(initialValue).toBeInTheDocument();
});

test('Se é renderizado um botão com texto Entrar', () => {
  render(
    <BrowserRouter>
      <Provider store={ store }>
        <Login />
      </Provider>
    </BrowserRouter>,
  );
  const button = screen.getByRole('button', { name: 'Entrar' });
  expect(button).toBeInTheDocument();
  expect(button).toBeDisabled();
});

test('Preenchimento do formulário', async () => {
  render(
    <BrowserRouter>
      <Provider store={ store }>
        <App />
      </Provider>
    </BrowserRouter>,
  );
  await userEvent.type(screen.getByPlaceholderText('E-mail'), 'aluno@trybe.com');
  await userEvent.type(screen.getByPlaceholderText('Senha'), 'alunotrybe');
  const button = screen.getByRole('button', { name: 'Entrar' });
  expect(button).not.toBeDisabled();
  await userEvent.click(button);
  expect(screen.getByText('BRL')).toBeInTheDocument();
});
