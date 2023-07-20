import { useEffect, useState } from 'react';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { addExpenses, fetchCurrency } from '../redux/actions';
import { DispatchType } from '../types';

function WalletForm() {
  const [value, setValue] = useState('');
  const [description, setDescription] = useState('');
  const [curr, setCurr] = useState('USD');
  const [method, setMethod] = useState('Dinheiro');
  const [tag, setTag] = useState('Alimentação');
  const [sum, setSum] = useState(0);

  const dispatch: DispatchType = useDispatch();

  useEffect(() => {
    dispatch(fetchCurrency());
  }, []);

  const currencies = useSelector(
    (state: any) => state.wallet.currencies,
    shallowEqual,
  );

  const handleChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleChangeCurr = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurr(e.target.value);
  };

  const handleChangeMethod = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setMethod(e.target.value);
  };

  const handleChangeTag = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTag(e.target.value);
  };

  const fetchRate = async () => {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all');
    const data = await response.json();
    delete data.USDT;
    return data;
  };

  const handleClick = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setSum(sum + 1);
    dispatch(addExpenses({
      id: sum,
      value,
      description,
      currency: curr,
      method,
      tag,
      exchangeRates: await fetchRate(),
    }));
    setValue('');
    setDescription('');
  };

  return (
    <form>
      <input
        type="number"
        data-testid="value-input"
        onChange={ handleChangeValue }
        value={ value }
      />
      <input
        type="text"
        data-testid="description-input"
        onChange={ handleChangeDescription }
        value={ description }
      />
      <select data-testid="currency-input" onChange={ handleChangeCurr }>
        {currencies.map((currency: string, index: number) => (
          <option key={ index }>{currency}</option>))}
      </select>
      <select data-testid="method-input" onChange={ handleChangeMethod }>
        <option>Dinheiro</option>
        <option>Cartão de crédito</option>
        <option>Cartão de débito</option>
      </select>
      <select data-testid="tag-input" onChange={ handleChangeTag }>
        <option>Alimentação</option>
        <option>Lazer</option>
        <option>Trabalho</option>
        <option>Transporte</option>
        <option>Saúde</option>
      </select>
      <button onClick={ handleClick }>Adicionar despesa</button>
    </form>
  );
}

export default WalletForm;
