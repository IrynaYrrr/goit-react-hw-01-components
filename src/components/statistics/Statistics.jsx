import React from 'react';
import css from "./Statistics.module.css";
import PropTypes from 'prop-types';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

export default function Statistics({ stats, title }) {

  return (
    <section className={css.statistics}>
      {title.length > 0 && (
        <h2 className={css.title}>{title}</h2>
      )}

      <ul className={css.statList}>
        {stats.map(item => (
          <li key={item.id} className={css.statItem} style={{ backgroundColor: getRandomHexColor() }}>
            <span className={css.label}>{item.label}</span>
            <span className={css.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  )
}


Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
  }))
}
