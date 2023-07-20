import { useSelector } from 'react-redux';
import { UserType } from '../types';

function Header() {
  const email = useSelector((state: UserType) => state.user.email);

  const expenses = useSelector((state: any) => state.wallet.expenses);
  const sumExpenses = expenses.reduce((acc: any, curr: any) => (acc
    + (Number(curr.value)
    * Number(curr.exchangeRates[curr.currency].ask))), 0).toFixed(2);

  return (
    <>
      <h1>TrybeWallet</h1>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">{ sumExpenses }</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
