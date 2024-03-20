import Container from './index.styled';
import { Heading, Text } from '@chakra-ui/react';

const Header = ({ headingProps, headingLabel, textLabel, textProps }) => {
  return (
    <Container>
      <Heading size={'md'} {...headingProps}>
        {headingLabel}
      </Heading>
      <Text {...textProps}>{textLabel}</Text>
    </Container>
  );
};
export default Header;
