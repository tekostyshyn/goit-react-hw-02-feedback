import { Component } from 'react';
import Title from './Title';
import Buttons from './Buttons';
import Statistics from './Statistics';

export class App extends Component {
  state = {
    good: 5,
    neutral: 10,
    bad: 0,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return ( Math.round(good / (this.countTotalFeedback()) * 100));
  }

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div>
        <Title text="Please leave feedback" />
        <Buttons data={this.state}></Buttons>
        <Title text="Statistics" />
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          total={this.countTotalFeedback()}
          positivePercentage={this.countPositiveFeedbackPercentage()}
        />
      </div>
    );
  }
}
