import {
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  Text,
  Progress,
  AvatarGroup,
  Avatar,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { CustomDate } from 'src/shared/ui';
import { HeaderBlock } from './index.styled';

export const ProjectsTable = ({ projects, columnHeaders }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr height='50px'>
            {columnHeaders && columnHeaders.map((header) => <Th key={header}>{header}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {projects &&
            projects.map((project) => (
              <Tr key={project.title}>
                <Td>
                  <HeaderBlock>
                    <Heading m='8px 0' fontSize='13px'>
                      {project.title}
                    </Heading>
                    <Text color='gray' fontSize='12px' overflow='hidden'>
                      {project.description.length > 60
                        ? `${project.description.slice(0, 60)}...`
                        : project.description}
                    </Text>
                  </HeaderBlock>
                </Td>
                <Td>
                  <Tag colorScheme='blue' fontWeight='600' fontSize='12px'>
                    {project.status}
                  </Tag>
                </Td>
                <Td>
                  <CustomDate dueDate={project.dueDate} />
                </Td>
                <Td>
                  <Progress
                    colorScheme='blue'
                    borderRadius='12px'
                    m='8px 0'
                    size='sm'
                    value={project.progress}
                  />
                </Td>
                <Td>
                  {/* TODO: Add custom avatars for users */}
                  <AvatarGroup size='sm' max={2}>
                    <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
                    <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
                  </AvatarGroup>
                </Td>
                <Td>
                  <Menu>
                    <MenuButton>
                      <HamburgerIcon />
                    </MenuButton>
                    <MenuList>
                      <MenuItem>Delete</MenuItem>
                      <MenuItem onClick={() => {}}>Edit</MenuItem>
                    </MenuList>
                  </Menu>
                </Td>
              </Tr>
            ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
