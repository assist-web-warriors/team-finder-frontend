import { Heading } from '@chakra-ui/react';
import { Title } from './index.styled';

const PageTitle = ({ title, children }) => {
  return (
    <Title>
      <Heading fontSize='32px'>{title}</Heading>
      {children}
    </Title>
  );
};

export default PageTitle;
