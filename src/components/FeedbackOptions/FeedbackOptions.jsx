import { Button, Paragraph } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <Paragraph>
      {options.map(option => {
        return <Button key={option} onClick={() => {onLeaveFeedback(option)}}>{option}</Button>
      })}
    </Paragraph>
  )
};

export default FeedbackOptions;
