import Title from '../Title'

const Section = ({ title, children }) => {
  return (
    <div>
      <Title text={title} />
      {children}
    </div>
  );
};

export default Section;
