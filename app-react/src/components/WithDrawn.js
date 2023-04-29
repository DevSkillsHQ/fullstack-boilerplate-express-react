import React, { useContext } from "react";
import Transaction from "./Transaction";
import { TransactionsContext } from "../contexts/TransactionContext";

const WithdrawnList = () => {
  const { accounts, withdrawn } = useContext(TransactionsContext);

  return (
    <>
      <h4>Transaction amount (withdrawn)</h4>
      <ul className="list">
        {withdrawn.map((transaction) => {
          const account = accounts.find(
            (account) => account.id === transaction.account_id
          );
          const balance = account ? account.balance : null;
          return (
            <Transaction
              key={transaction.id}
              id={transaction.id}
              amount={transaction.amount}
              accountId={transaction.account_id}
              balance={balance}
            />
          );
        })}
      </ul>
    </>
  );
};

export default WithdrawnList;
