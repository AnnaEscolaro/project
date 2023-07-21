import { useSelector } from 'react-redux';

function Table() {
  const expenses = useSelector(
    (state: any) => state.wallet.expenses,
  );

  return (
    <table>
      <tr>
        <th>Descrição</th>
        <th>Tag</th>
        <th>Método de pagamento</th>
        <th>Valor</th>
        <th>Moeda</th>
        <th>Câmbio utilizado</th>
        <th>Valor convertido</th>
        <th>Moeda de conversão</th>
        <th>Editar/Excluir</th>
      </tr>
      {expenses.map((expense: any) => (
        <tr key={ expense.id }>
          <td>{ expense.description }</td>
          <td>{ expense.tag }</td>
          <td>{ expense.method }</td>
          <td>{ expense.value }</td>
          {/* <td>{ expense.currency }</td> */}
          {/* <td>{ expense.exchangeRates.expense.currency }</td> */}
          {/* <td>{ valorConvertido }</td> */}
          <td>Real</td>
        </tr>
      ))}

    </table>

  );
}

export default Table;
