import {
  Avatar,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
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
import MoreIcon from '../../../assets/more-icon.svg?react';

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
          Add members
        </Heading>
        <TableContainer border={'2px solid #E2E8F0'} width={'100%'} borderRadius={'12px'}>
          <Table size='sm'>
            <Thead>
              <Tr height={'50px'}>
                <Th>DEPARTMENT NAME</Th>
                <Th>DEPARTMENT MANAGER</Th>
                <Th>MEMBERS</Th>
                <Th>MORE</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr height={'50px'}>
                <Td>Management</Td>
                <Td>Motco Ana</Td>
                <Td>
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                  <Avatar src='https://bit.ly/ryan-florence' size={'sm'} />
                  <Avatar src='https://bit.ly/prosper-baba' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
              <Tr height={'50px'}>
                <Td>IT</Td>
                <Td>Mark Chandler</Td>
                <Td>
                  <Avatar src='https://bit.ly/dan-abramov' size={'sm'} />
                  <Avatar src='https://bit.ly/tioluwani-kolawole' size={'sm'} />
                  <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'} />
                </Td>
                <Td cursor={'pointer'}>
                  <Menu>
                    <MenuButton>
                      <MoreIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => alert('Kagebunshin')}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
        <Button bgColor={'#fff'} color={'#D0D5DD'} border={'1px solid #D0D5DD'}>
          Add members
        </Button>
      </Flex>
    </Container>
  );
};
export default AddDepartment;
