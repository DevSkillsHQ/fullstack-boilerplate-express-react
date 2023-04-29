import WithDrawnList from "./WithDrawn";
import DepositList from "./Deposit";

const TransactionList = () => {
  return (
    <>
      <h3>Transaction History</h3>
      <ul>
        <WithDrawnList />
        <DepositList />
      </ul>
    </>
  );
};

export default TransactionList;
