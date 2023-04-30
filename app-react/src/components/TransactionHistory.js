import React, { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const TransactionHistory = () => {
  const { test } = useContext(TransactionsContext);

  const storedTransaction = localStorage.getItem("test");

  const transactionObj = JSON.parse(storedTransaction) || [];

  console.log(transactionObj);

  return (
    <>
      <h4>Transaction amount (deposit)</h4>
      {transactionObj &&
      transactionObj.account_id &&
      transactionObj.to_account_id &&
      transactionObj.amount ? (
        <ul className="list">
          <li className="d-flex justify-content-center text-center mx-auto">
            <span className="mr-4">
              Transferred: {transactionObj.amount}Kr to account
            </span>
            <span className="ml-4">
              : {transactionObj.to_account_id} from account
            </span>
            <span className="ml-4">: {transactionObj.account_id}</span>
          </li>
        </ul>
      ) : (
        <p>No transactions available.</p>
      )}
    </>
  );
};

export default TransactionHistory;
