import React from 'react';
import css from'./Feedback.module.css'

const Feedback = ({ options, handlerBtnClick }) => {
  return (
    <div className={css.buttonsContainer}>
      {options.map(option => (
        <button className={css.button}
          key={option}
          type="button"
          onClick={() => handlerBtnClick(option)}
        >
          {option}
        </button>
      ))}
   </div>
  );
};

export default Feedback;
