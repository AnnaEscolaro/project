import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import store from '../redux';
import WalletForm from '../components/WalletForm';
import App from '../App';
import mockData from './helpers/mockData';

describe('teste', () => {
  test('Se é renderizado um input de valor', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    render(
      <Provider store={ store }>
        <WalletForm />
      </Provider>,
    );
    const valueInput = screen.getByTestId('value-input');
    expect(valueInput).toBeInTheDocument();
  });

  test('Se é renderizado um input de descrição', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    render(
      <Provider store={ store }>
        <WalletForm />
      </Provider>,
    );
    const descriptionInput = screen.getByTestId('description-input');
    expect(descriptionInput).toBeInTheDocument();
  });

  test('Se é renderizado um input de categorias', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    render(
      <Provider store={ store }>
        <WalletForm />
      </Provider>,
    );
    const categoryInput = screen.getByText('Alimentação');
    expect(categoryInput).toBeInTheDocument();
  });

  test('Se é renderizado um input de métodos de pagamento', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    render(
      <Provider store={ store }>
        <WalletForm />
      </Provider>,
    );
    const methodInput = screen.getByText('Dinheiro');
    expect(methodInput).toBeInTheDocument();
  });

  test('Se é renderizado um botão de adicionar despesa', () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
    render(
      <Provider store={ store }>
        <WalletForm />
      </Provider>,
    );
    const button = screen.getByRole('button', { name: 'Adicionar despesa' });
    expect(button).toBeInTheDocument();
  });

  test('Preenchimento do formulário', async () => {
    global.fetch = vi.fn().mockResolvedValue({
      json: async () => (mockData),
    });
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
    await userEvent.type(screen.getByTestId('description-input'), 'despesa');
    await userEvent.type(screen.getByTestId('value-input'), '1');
    const buttonAdd = screen.getByRole('button', { name: 'Adicionar despesa' });
    await userEvent.click(buttonAdd);
    expect(screen.getByTestId('total-field')).not.toBe(0.00);
  });
});
