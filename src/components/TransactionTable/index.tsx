import { Container } from "./styles";

export function TransactionTable() {
  return (
    <Container>
      <table>
        <thead>
          <th>Título</th>
          <th>Valor</th>
          <th>Catetoria</th>
          <th>Data</th>
        </thead>
        <tbody>
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$12.000</td>
            <td>Desenvolvimento</td>
            <td>30/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="withdraw">- R$1.000</td>
            <td>Casa</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
