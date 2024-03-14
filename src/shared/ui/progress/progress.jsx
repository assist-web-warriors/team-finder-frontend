import { Text, Progress as ChakraProgress } from '@chakra-ui/react';
import { ProgressContainer } from './index.styled';

export const Progress = ({ progress, ...props }) => {
  return (
    <>
      <ProgressContainer>
        <Text {...props}>Progress</Text>
        <Text {...props}>{progress}%</Text>
      </ProgressContainer>

      <ChakraProgress colorScheme='blue' borderRadius='12px' m='8px 0' size='sm' value={progress} />
    </>
  );
};
