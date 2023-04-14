import { Component } from 'react';
import Section from './Section';
import Statistics from './Statistics';
import FeedbackOptions from './FeedbackOptions';

export class App extends Component {
  state = {
    good: 5,
    neutral: 8,
    bad: 3,
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    return Math.round((good / this.countTotalFeedback()) * 100);
  };

  leaveFeedback = evt => {
    this.setState(prevState => {
      if (evt.target.textContent === 'good') {
        console.log(prevState.good);
        console.log('good');
        return (prevState.good += 1);
      } else if (evt.target.textContent === 'neutral') {
        console.log('neutral');
        return (prevState.neutral += 1);
      } else if (evt.target.textContent === 'bad') {
        console.log('bad');
        return (prevState.bad += 1);
      }
    });
  };

  render() {
    const { good, neutral, bad } = this.state;
    const options = Object.keys(this.state);

    return (
      <div>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.leaveFeedback}
          ></FeedbackOptions>
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            bad={bad}
            neutral={neutral}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}
