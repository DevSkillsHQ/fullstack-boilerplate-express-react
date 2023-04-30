import { createContext, useState, useEffect } from "react";

export const TransactionsContext = createContext([]);

export const TransactionsProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [transactionById, setTransactionById] = useState([]);
  const [accounts, setAccounts] = useState([]);
  const [currentAccount, setCurrentAccount] = useState(null);
  const [error, setError] = useState(null);
  const [balance, setBalance] = useState(0);
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [test, setTest] = useState([]);

  const fetchTransactions = async () => {
    try {
      const response = await fetch("http://localhost:4000/transactions");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      setTransactions(data);
      setLoading(false);
    } catch (error) {
      setErrorMessage("Unable to fetch transaction list");
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const fetchAccounts = async () => {
    try {
      const response = await fetch("http://localhost:4000/accounts");
      const data = await response.json();

      const promises = data.map(async (account) => {
        try {
          const response = await fetch(
            `http://localhost:4000/accounts/${account.account_id}`
          );
          const accountData = await response.json();
          return {
            id: account.account_id,
            balance: accountData.balance,
            loading: false,
          };
        } catch (error) {
          console.error(error);
          return {
            id: account.account_id,
            balance: null,
            loading: false,
          };
        }
      });

      const accountsData = await Promise.all(promises);
      setAccounts(accountsData);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const fetchTransactionById = async () => {
    try {
      if (currentAccount) {
        const res = await fetch(
          `http://localhost4000/transactions?account_id=${currentAccount}`
        );
        setTransactionById(res.data);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  const addTransaction = async (transaction) => {
    try {
      const res = await fetch("http://localhost:4000/transactions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(transaction),
      });
      const data = await res.json();

      const updatedTransactions = [
        ...transactions,
        {
          from: transaction.account_id,
          to: transaction.to_account_id,
          ...data,
        },
      ];

      localStorage.setItem("from", transaction.account_id);
      localStorage.setItem("to", transaction.from_account_id);

      setTransactions(updatedTransactions);
      setCurrentAccount(data.account_id);
      setTest([...test, transaction]);
      localStorage.setItem("test", JSON.stringify(transaction));
      setBalance(data.amount);
    } catch (err) {
      setError(err.message);
    }
  };

  // const storedArray = JSON.parse(localStorage.getItem("test"));

  // const updateLocalStorage = (key, transaction) => {
  //   localStorage.setItem(key, JSON.stringify(transaction));
  // };

  // const deposit = transactions.filter((transaction) => transaction.amount >= 0);

  const withdrawn = transactions
    .filter((transaction) => transaction.amount < 0)
    .map((transaction) => ({
      amount: transaction.amount,
      account_id: transaction.account_id,
    }));
 
  useEffect(() => {
    fetchTransactions();
    fetchAccounts();
    fetchTransactionById();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <TransactionsContext.Provider
      value={{
        accounts,
        balance,
        transactions,
        currentAccount,
        addTransaction,
        test,
        withdrawn,
        error,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  );
};
