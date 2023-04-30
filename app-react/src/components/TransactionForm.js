import React, { useContext, useState } from "react";
import { TransactionsContext } from "../contexts/TransactionContext";

const TransactionForm = () => {
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    account_id: "",
    to_account_id: "",
    amount: "",
  });

  const { addTransaction, setCurrentAccount } = useContext(TransactionsContext);

  const validateForm = () => {
    let errors = {};
    const uuidv4regex = new RegExp(
      "^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[4][0-9a-fA-F]{3}-[8-9aAbB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}$"
    );
    const intregex = new RegExp("[^[d.-/]+$");

    if (
      !formData.account_id ||
      !uuidv4regex.test(formData.account_id)
    ) {
      errors.from_account_id = "From Account ID must be a valid UUID v4";
    }

    if (!formData.to_account_id || !uuidv4regex.test(formData.to_account_id)) {
      errors.to_account_id = "To Account ID must be a valid UUID v4";
    }

    if (!formData.amount || !intregex.test(formData.amount)) {
      errors.amount = "Amount must be a valid integer";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();

    const transaction = {
      account_id: formData.account_id,
      to_account_id: formData.to_account_id,
      amount: formData.amount,
    };

    setTimeout(() => {
      window.location.reload(true);
    }, 2000);

    if (Object.keys(errors).length === 0) {
      await addTransaction(transaction);
      //setCurrentAccount(transaction.from_account_id);
      setErrors({});
    } else {
      setErrors(errors);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-control mb-3">
          <label htmlFor="fromAccountId" className="form-label">
            From Account Id
          </label>
          <input
            data-type="account-id"
            className="form-control"
            id="account_id"
            name="account_id"
            value={formData.account_id}
            onChange={handleChange}
          />
        </div>
        {errors.account_id && (
          <div className="text-danger">{errors.account_id}</div>
        )}

        <div className="form-control mb-3">
          <label htmlFor="toAccountId" className="form-label">
            To Account Id
          </label>
          <input
            data-type="account-id"
            className="form-control"
            id="to_account_id"
            name="to_account_id"
            value={formData.to_account_id}
            onChange={handleChange}
          />
        </div>
        {errors.to_account_id && (
          <div className="text-danger">{errors.to_account_id}</div>
        )}
        <div className="form-control mb-3">
          <label htmlFor="Amount" className="form-label">
            Amount
          </label>
          <input
            className="form-control"
            aria-describedby="amount"
            type="text"
            data-type="amount"
            id="amount"
            name="amount"
            value={formData.amount ?? ""}
            onChange={handleChange}
          />
        </div>
        {errors.amount && <div className="text-danger">{errors.amount}</div>}

        <div className="text-center d-flex align-items-center justify-content-center">
          <button
            data-type="transaction-submit"
            type="submit"
            id="submit"
            variant="primary"
            className="btn btn-primary"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default TransactionForm;
