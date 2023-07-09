import React from 'react';
import css from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr className={css.tableHeader}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      {items.map(item => (
        <tr key={item.id}>
          <td>{item.type}</td>
          <td>{item.amount}</td>
          <td>{item.currency}</td>
        </tr>
      ))}
    </table>
  )
}
