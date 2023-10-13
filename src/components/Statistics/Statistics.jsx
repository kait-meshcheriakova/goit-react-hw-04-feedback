import React from 'react';
import css from './Statistics.module.css'
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <>
    <p className={css.statText}>Good : {good}</p>
    <p className={css.statText}>Neutral : {neutral}</p>
    <p className={css.statText}>Bad : {bad}</p>
    <p className={css.statText}>Total : {total}</p>
    <p className={css.statText}>Positive feedback: {positivePercentage}% </p>
  </>
);

export default Statistics;
