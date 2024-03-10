import {
  Avatar,
  Button,
  Checkbox,
  Flex,
  Heading,
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
import { AddIcon } from '@chakra-ui/icons';

const AddDepartment = () => {
  return (
    <Container>
      <Flex gap={'20px'} direction={'column'} justifyContent={'center'} alignItems={'flex-start'}>
        <Flex gap={'20px'}>
          <Heading fontSize={'2xl'}>Add Departments</Heading>
          <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'}>
            Save
          </Button>
        </Flex>
        <Flex width={'90%'} justifyContent={'space-between'} gap={'24px'}>
          <Select
            cursor={'pointer'}
            bgColor={'white'}
            width={'50%'}
            placeholder='Enter department name'
            border={'2px solid #D0D5DD'}
            color={'gray.300'}>
            <option value='option1'>FrontEnd</option>
            <option value='option2'>UI/Ux</option>
            <option value='option3'>BackEnd</option>
          </Select>
          <Select
            cursor={'pointer'}
            bgColor={'#fff'}
            width={'50%'}
            placeholder='Enter department manager'
            border={'2px solid #D0D5DD'}
            color={'gray.300'}>
            <option value='option1'>Motco Ana</option>
            <option value='option2'>Sofron Lavinia</option>
            <option value='option3'>Maxim Iulia</option>
          </Select>
        </Flex>
        <Heading fontSize={'14px'} color={'#4D5464'}>
          Current members
        </Heading>
        <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
          <Table size='sm'>
            <Thead>
              <Tr height={'50px'}>
                <Th>TOTAL USERS</Th>
                <Th>ROLE</Th>
                <Th>EMAIL</Th>
                <Th>Experience</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr height={'50px'}>
                <Td>
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Heading fontSize={'14px'} color={'#4D5464'}>
          Assign members
        </Heading>
        <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
          <Table size='sm'>
            <Thead>
              <Tr height={'50px'}>
                <Th>TOTAL USERS</Th>
                <Th>ROLE</Th>
                <Th>EMAIL</Th>
                <Th>Experience</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>
                  <Checkbox marginRight={'10px'} />
                  <Avatar marginRight={'10px'} src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  Motco Ana
                </Td>
                <Td>Managment</Td>
                <Td>sage@chakra-ui.com</Td>
                <Td>1.5 years</Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>

        <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'} gap={'20px'}>
          <AddIcon />
          Add members
        </Button>
      </Flex>
    </Container>
  );
};
export default AddDepartment;
