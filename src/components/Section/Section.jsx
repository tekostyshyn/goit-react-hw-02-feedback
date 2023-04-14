import Title from '../Title'
import { StyledSection } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <StyledSection>
      <Title text={title} />
      {children}
    </StyledSection>
  );
};

export default Section;
