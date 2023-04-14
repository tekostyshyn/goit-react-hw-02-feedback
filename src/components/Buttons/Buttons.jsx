import { Button, Paragraph } from './Buttons.styled';

const Buttons = ({ data }) => {
  const values = Object.keys(data);

  return (
    <Paragraph>
      {values.map(value => {
        return <Button key={value}>{value}</Button>
      })}
    </Paragraph>
  )
};

export default Buttons;
