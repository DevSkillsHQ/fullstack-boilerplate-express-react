import React, { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const TransactionHistory = () => {
  const { test } = useContext(TransactionsContext);

  const storedTransaction = localStorage.getItem("test");
  
  const transactionObj = JSON.parse(storedTransaction) || [];

  console.log(transactionObj)

  return (
    <>
      <h4>Transaction amount (deposit)</h4>
      {transactionObj && transactionObj.account_id && transactionObj.to_account_id && transactionObj.amount ? (
      <ul className="list">
        <li>
          <span className="account m-2">
            Transferred: {transactionObj.account_id}
          </span>
          <span className="amount m-2">{transactionObj.amount}Kr</span>
          <span className="balance m-2">
            To: {transactionObj.to_account_id}
          </span>
        </li>
      </ul>
       ) : (
        <p>No transactions available.</p>
      )}
    </>
  );
};

export default TransactionHistory;
