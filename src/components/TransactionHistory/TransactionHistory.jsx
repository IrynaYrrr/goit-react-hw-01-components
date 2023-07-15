import React from 'react';
import css from "./TransactionHistory.module.css";
import PropTypes from 'prop-types';

export default function TransactionHistory({ items }) {
  return (
    <table className={css.transactionHistory}>
      <thead>
        <tr className={css.tableHeader}>
          <th className={css.tableTop}>Type</th>
          <th className={css.tableTop}>Amount</th>
          <th className={css.tableTop}>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tr className={css.tableHeader} key={item.id}>
          <td className={css.tableItem}>{item.type}</td>
          <td className={css.tableItem}>{Number(item.amount)}</td>
          <td className={css.tableItem}>{item.currency}</td>
        </tr>
      ))}
    </table>
  )
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired
}
