import React from 'react';
import css from "./Statistics.module.css";


export default function Statistics(data) {

  const { title } = data;


  return (
    <section className={css.statistics}>
      <h2 className={css.title}>{title}</h2>
      <ul className={css.stat_list}>
        <li className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>4%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>14%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>41%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp4</span>
          <span className={css.percentage}>12%</span>
        </li>
      </ul>
    </section>
  )
}
