import "./App.css";
import { TransactionsProvider } from "../src/contexts/TransactionContext";
import TransactionsList from "./components/TransactionsList";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <>
      <TransactionsProvider>
        <div className="container text-center p-5">
        <header>Transaction Management</header>
          <div className="row">
            <div className="col p-5">
              
              <TransactionForm />
            </div>
            <div className="col p-5">
              <TransactionsList />
            </div>
          </div>
        </div>
      </TransactionsProvider>
    </>
  );
}

export default App;
