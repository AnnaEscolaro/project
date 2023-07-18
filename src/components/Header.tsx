import { useSelector } from 'react-redux';
import { UserType } from '../types';

function Header() {
  const email = useSelector((state: UserType) => state.user.email);

  return (
    <>
      <h1>TrybeWallet</h1>
      <p data-testid="email-field">{ email }</p>
      <p data-testid="total-field">0</p>
      <p data-testid="header-currency-field">BRL</p>
    </>
  );
}

export default Header;
