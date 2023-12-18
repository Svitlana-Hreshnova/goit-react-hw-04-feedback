import css from './Statistics.module.css';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={css.statsContainer}>
    <div className={css.statsItem}>Good: {good}</div>
    <div className={css.statsItem}>Neutral: {neutral}</div>
    <div className={css.statsItem}>Bad: {bad}</div>
    <div className={css.statsItem}>Total: {total}</div>
    <div className={css.statsItem}>
      Positive Feedback: {positivePercentage}%
    </div>
  </div>
);

export default Statistics;
