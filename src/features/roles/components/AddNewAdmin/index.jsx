import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
} from '@chakra-ui/react';
import Container from './index.styled';
import { ArrowForwardIcon, CopyIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { Table } from 'src/common';

const AddNewAdmin = () => {
  const [showInput, setShowInput] = useState(false);
  const [generatedURL, setGeneratedURL] = useState('');

  const handleClick = () => {
    const generatedURL = 'https://www.youtube.com/watch?v=0s97B824Hec'; // Replace generateURL() with your own function
    setGeneratedURL(generatedURL);
    setShowInput(true);
  };

  return (
    <Container>
      <Flex gap={'40px'} direction={'column'}>
        <Heading fontSize={'2xl'}>Admin role assigments</Heading>
        <Flex width={'90%'} justifyContent={'space-between'}>
          <Select
            width={'40%'}
            placeholder='Add new Admin'
            border={'2px solid #0356E8'}
            color={'#0356E8'}>
            <option value='option1'>Option 1</option>
            <option value='option2'>Option 2</option>
            <option value='option3'>Option 3</option>
          </Select>
          <Button color={'#fff'} bgColor={'#0356e8'}>
            Save
          </Button>
        </Flex>
        <Table />
      </Flex>
      <Flex direction={'column'} gap={'40px'}>
        <Heading fontSize={'2xl'}>Invitation URL</Heading>
        <Button
          width={'150px'}
          bgColor={'#fff'}
          color={'#0356E8'}
          border={'2px solid #0356E8'}
          onClick={handleClick}>
          Generate URL
        </Button>
      </Flex>
      {showInput && (
        <Flex direction={'column'} gap={'24px'} color={'#D0D5DD'}>
          <InputGroup>
            <Input placeholder={generatedURL} width={'415px'}></Input>
            <InputRightAddon bgColor={'#fff'}>
              <ArrowForwardIcon color={'black'} />
            </InputRightAddon>
          </InputGroup>
          <InputGroup>
            <Input placeholder={generatedURL} width={'415px'}></Input>
            <InputRightAddon bgColor={'#fff'}>
              <CopyIcon color={'black'} />
            </InputRightAddon>
          </InputGroup>
        </Flex>
      )}
    </Container>
  );
};
export default AddNewAdmin;
