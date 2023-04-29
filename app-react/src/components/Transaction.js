import { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const Transaction = ({ amount, accountId }) => {
  const { accounts } = useContext(TransactionsContext);

  const account = accounts.find((account) => account.id === accountId);

  return (
    <li>
      <span className="account m-2">Account Id: {accountId}</span>
      <span className="amount m-2">Amount: {amount}</span>
      <span className="balance m-2">Balance:{""}
      {account ? `${account.balance.toFixed(2) ?? "Loading..."} Kr` : "-"}</span>
    </li>
  );
};

export default Transaction;
