import "./Expenses.css";
import ExpenseItem from "./ExpenseItem";
import Card from "../Card";

function Expense(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expense[0].title}
        date={props.expense[0].date}
        amount={props.expense[0].amount}
      />
      <ExpenseItem
        title={props.expense[1].title}
        date={props.expense[1].date}
        amount={props.expense[1].amount}
      />
      <ExpenseItem
        title={props.expense[2].title}
        date={props.expense[2].date}
        amount={props.expense[2].amount}
      />
      <ExpenseItem
        title={props.expense[3].title}
        date={props.expense[3].date}
        amount={props.expense[3].amount}
      />
    </Card>
  );
}
export default Expense;
