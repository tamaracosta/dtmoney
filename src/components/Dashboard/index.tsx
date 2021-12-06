import { Container } from "./styles"
import { Summary } from "../Summary"
import { TransationTable } from "../TransactionsTable"

export function Dashboard(){
  return (
    <Container>
      <Summary />
      <TransationTable />
    </Container>

  )
}