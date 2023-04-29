import './App.css';
import TransactionsList from "./components/TransactionsList";
import TransactionForm from "./components/TransactionForm";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
