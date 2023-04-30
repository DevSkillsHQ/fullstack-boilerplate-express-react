import WithDrawnList from "./WithDrawn";
import TransactionHistory from "./TransactionHistory";

const TransactionList = () => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul>
        <WithDrawnList />
        <TransactionHistory />
      </ul>
    </>
  );
};

export default TransactionList;
