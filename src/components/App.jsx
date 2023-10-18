import React, { useState } from 'react';
import Section from './Section/Section';
import Feedback from './feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handlerBtnClick = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;

      default:
        break;
    }
  };
  const totalFeedback = () => {
    return good + neutral + bad;
  };
  const total = totalFeedback();
  const positiveFeedbackPercentage = () => {
    return Math.round((good / total) * 100);
  };

  const options = Object.keys({ good, neutral, bad });
  const positivePercentage = positiveFeedbackPercentage();
  return (
    <>
      <Section title="Please leave feedback">
        <Feedback handlerBtnClick={handlerBtnClick} options={options} />
      </Section>
      <Section title="Statistics">
        {total !== 0 ? (
          <Statistics
            title="Statistics"
            good={good}
            neutral={neutral}
            bad={bad}
            total={total}
            positivePercentage={positivePercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </>
  );
};
