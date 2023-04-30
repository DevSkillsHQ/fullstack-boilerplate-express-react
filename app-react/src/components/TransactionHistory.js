import React, { useContext } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const TransactionHistory = () => {
  const { test } = useContext(TransactionsContext);

  const storedTransaction = localStorage.getItem("test");

  const transactionObj = JSON.parse(storedTransaction) || [];

  console.log(transactionObj);

  return (
    <>
      <h4 className="mb-3">Transaction amount (deposit)</h4>
      {transactionObj &&
      transactionObj.account_id &&
      transactionObj.to_account_id &&
      transactionObj.amount ? (
        <div>
          {" "}
          <span className="mr-4">
            Transferred: {transactionObj.amount}Kr to account
          </span>
          <span className="mx-2">
            {transactionObj.to_account_id} from account
          </span>
          <span className="mx-2"> {transactionObj.account_id}</span>
        </div>
      ) : (
        <p>No transactions available.</p>
      )}
    </>
  );
};

export default TransactionHistory;
