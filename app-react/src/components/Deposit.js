import React, { useContext } from "react";
import Transaction from "./Transaction";
import { TransactionsContext } from "../contexts/TransactionContext";

const DepositList = () => {
  const { accounts, deposit } = useContext(TransactionsContext);

  return (
    <>
      <h4>Transaction amount (deposit)</h4>
      <ul className="list">
      {deposit.map((transaction) => {
        const account = accounts.find((account) => account.id === transaction.account_id);
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

export default DepositList;
