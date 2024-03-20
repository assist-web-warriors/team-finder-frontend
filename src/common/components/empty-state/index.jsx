import { Box, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import EmptyStateIcon from '../../assets/empty-state-1.svg?react';

const EmptyState = ({
  isVisible = false,
  headingLabel = 'No items added yet.',
  textLabel = 'Please add a new item to see it here.',
}) => {
  return isVisible ? (
    <Container>
      <Box mb={'20px'}>
        <EmptyStateIcon />
      </Box>
      <Heading size={'md'}>{headingLabel}</Heading>
      <Text>{textLabel}</Text>
    </Container>
  ) : null;
};
export default EmptyState;
