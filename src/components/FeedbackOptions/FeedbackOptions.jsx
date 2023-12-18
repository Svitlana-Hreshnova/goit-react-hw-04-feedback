import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ options, handleFeedback }) => (
  <div className={css.feedbackOptions}>
    {options.map((option, index) => (
      <button key={index} onClick={() => handleFeedback(option)}>
        {option}
      </button>
    ))}
  </div>
);

export default FeedbackOptions;
