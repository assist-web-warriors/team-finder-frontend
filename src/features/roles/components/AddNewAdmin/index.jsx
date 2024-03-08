import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import Container from './index.styled';
import MoreIcon from '../../assets/more-icon.svg?react';
import { ArrowForwardIcon, CopyIcon } from '@chakra-ui/icons';
import { useState } from 'react';

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
      <Flex
        gap={'40px'}
        direction={'column'}
        justifyContent={'center'}
        alignItems={'flex-start'}
        marginLeft={'58px'}>
        <Heading fontSize={'2xl'} marginTop={'40px'}>
          Admin role assigments
        </Heading>
        <Select
          width={'40%'}
          placeholder='Add new Admin'
          border={'2px solid #0356E8'}
          color={'#0356E8'}>
          <option value='option1'>Option 1</option>
          <option value='option2'>Option 2</option>
          <option value='option3'>Option 3</option>
        </Select>
        <TableContainer border={'2px solid #E2E8F0'} width={'90%'} borderRadius={'12px'}>
          <Table size='sm'>
            <Thead>
              <Tr height={'50px'}>
                <Th>NAME</Th>
                <Th>ROLE</Th>
                <Th>EMAIL</Th>
                <Th>MORE</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr height={'50px'}>
                <Td>Segun Adebayo</Td>
                <Td>Admin</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td cursor={'pointer'}>
                  <MoreIcon />
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>Mark Chandler</Td>
                <Td>Admin</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td cursor={'pointer'}>
                  <MoreIcon />
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
      <Flex direction={'column'} marginLeft={'58px'} gap={'40px'}>
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
        <Flex marginLeft={'58px'} direction={'column'} gap={'24px'} color={'#D0D5DD'}>
          <InputGroup>
            <Input placeholder='xxxxxxxx.com/invite/g5438ur74y5g7....' width={'415px'}>
              {generatedURL}
            </Input>
            <InputRightAddon bgColor={'#fff'}>
              <ArrowForwardIcon color={'black'} />
            </InputRightAddon>
          </InputGroup>
          <InputGroup>
            <Input placeholder='xxxxxxxx.com/invite/g5438ur74y5g7....' width={'415px'}>
              {generatedURL}
            </Input>
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
