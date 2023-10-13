import React, { Component } from 'react';
import Section from './Section/Section';
import Feedback from './feedback/Feedback';
import Statistics from './Statistics/Statistics';
import Notification from './Notification/Notification';
export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handlerBtnClick = state => {
    this.setState(prevState => ({ [state]: prevState[state] + 1 }));
  };

  totalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  positiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.totalFeedback();
    return total === 0 ? 0 : Math.round((good / total) * 100);
  };

  render() {
    const options = Object.keys(this.state);
    const totalFeedback = this.totalFeedback();
    const positiveFeedbackPercentage = this.positiveFeedbackPercentage();
    return (
      <>
        <Section title="Please leave feedback">
          <Feedback handlerBtnClick={this.handlerBtnClick} options={options} />
        </Section>
        <Section title="Statistics">
          {totalFeedback !== 0 ? (
            <Statistics
              title="Statistics"
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={totalFeedback}
              positivePercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </>
    );
  }
}
