import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addEmail } from '../redux/actions';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addEmail(email));
    navigate('/carteira');
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  useEffect(() => {
    const splittedEmail = email.split('');
    if (password.length > 5
      && email.length > 2
      && splittedEmail.includes('@')
      && splittedEmail.filter((el) => el === '@').length === 1
      && splittedEmail[splittedEmail.length - 1] !== '@'
      && splittedEmail[splittedEmail.length - 1] !== '.') {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [password, email]);

  return (
    <form
      onSubmit={ handleSubmit }
    >
      <input
        type="email"
        data-testid="email-input"
        placeholder="E-mail"
        onChange={ handleChangeEmail }
      />
      <input
        type="password"
        data-testid="password-input"
        placeholder="Senha"
        onChange={ handleChangePassword }
      />
      <button
        disabled={ isDisabled }
      >
        Entrar
      </button>
    </form>
  );
}

export default Login;
