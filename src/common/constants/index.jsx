import { EditIcon, SunIcon, TimeIcon } from '@chakra-ui/icons';
import DepartmentIcon from '../assets/department-icon.svg?react';
import ProjectIcon from '../assets/project-icon.svg?react';
import TaskIcon from '../assets/task-icon.svg?react';
import TeamIcon from '../assets/team-icon.svg?react';
import UserIcon from '../assets/user-icon.svg?react';
import {
  Avatar,
  Flex,
  Heading,
  Progress,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';

const CONSTANTS = {
  PAGES: {
    DEPARTMENTS: '/departments',
    PROJECTS: '/projects',
    SKILS: '/skills',
    PERSONAL: '/personal',
    WELCOME: '/',
  },
  SIDEBAR_PAGES: {
    ORGANIZATION: {
      NAME: 'Organization',
      URL: '/organization',
      ICON: <DepartmentIcon />,
    },
    DEPARTMENTS: {
      NAME: 'Departments',
      URL: '/departments',
      ICON: <TaskIcon />,
    },
    SKILLS: {
      NAME: 'Skills',
      URL: '/skills',
      ICON: <SunIcon />,
    },
    PERSONAL: {
      NAME: 'Personal',
      URL: '/personal',
      ICON: <UserIcon />,
    },
    TEAM: {
      NAME: 'Team',
      URL: '/teams',
      ICON: <TeamIcon />,
    },
    PROJECTS: {
      NAME: 'Projects',
      URL: '/projects',
      ICON: <ProjectIcon />,
    },
  },
  NAVIGATION_PAGES: {
    NOTIFICATION: {
      NAME: 'Notification',
      URL: '/notification',
    },
  },
  PROJECTS_DETAILS: {
    TIMELINE: {
      NAME: 'Timeline',
      ICON: <TeamIcon />,
      ADDITIONAL_CONTENT: (
        <Flex direction={'column'} gap={'7px'}>
          <Heading color={'#A0AEC0'} fontSize={'14px'}>
            Period: 3 Months
          </Heading>
          <TableContainer border={'1px solid #A0AEC0'} borderRadius={'10px'}>
            <Table variant='simple'>
              <Thead>
                <Tr>
                  <Th color={'#A0AEC0'}>Start Date</Th>
                  <Th color={'#A0AEC0'}>End Date</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td color={'black'}>Mar 23, 2024</Td>
                  <Td color={'black'}>Jun 23, 2024 </Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        </Flex>
      ),
    },
    STATUS: {
      NAME: 'Status',
      ICON: <TimeIcon />,
      ADDITIONAL_CONTENT: <Progress value={80} />,
    },
    DESCRIPTION: {
      NAME: 'Description',
      ICON: <EditIcon />,
      ADDITIONAL_CONTENT: 'Description',
    },
    TEHNOLOGY: {
      NAME: 'Technology Stack',
      ICON: <ProjectIcon />,
      ADDITIONAL_CONTENT: (
        <Flex alignItems={'center'} gap={'8px'} justifyContent={'center'}>
          <Heading border={'1px solid #D0D5DD'} borderRadius={'6px'} fontSize={'16px'}>
            React Native
          </Heading>
          <Heading border={'1px solid #D0D5DD'} borderRadius={'6px'} fontSize={'16px'}>
            Node.js
          </Heading>
          <Heading border={'1px solid #D0D5DD'} borderRadius={'6px'} fontSize={'16px'}>
            Fire Base
          </Heading>
        </Flex>
      ),
    },
    MEMBERS: {
      NAME: 'Members',
      ICON: <UserIcon />,
      ADDITIONAL_CONTENT: (
        <Flex direction={'column'} gap={'20px'}>
          <Flex direction={'column'} gap={'10px'}>
            <Heading fontSize={'14px'} color={'black'}>
              Currrent members
            </Heading>
            <Flex>
              <Avatar src='https://bit.ly/dan-abramov' size={'sm'}></Avatar>
              <Avatar src='https://bit.ly/prosper-baba' size={'sm'}></Avatar>
              <Avatar src='https://bit.ly/code-beast' size={'sm'}></Avatar>
              <Avatar src='https://bit.ly/sage-adebayo' size={'sm'}></Avatar>
              <Avatar size={'sm'}></Avatar>
            </Flex>
          </Flex>
          <Flex direction={'column'} gap={'10px'}>
            <Heading fontSize={'14px'} color={'black'}>
              Ex members
            </Heading>
            <Flex>
              <Avatar src='https://bit.ly/dan-abramov' size={'sm'}></Avatar>
              <Avatar src='https://bit.ly/kent-c-dodds' size={'sm'}></Avatar>
              <Avatar src='https://bit.ly/ryan-florence' size={'sm'}></Avatar>
            </Flex>
          </Flex>
        </Flex>
      ),
    },
  },
};

export default CONSTANTS;
