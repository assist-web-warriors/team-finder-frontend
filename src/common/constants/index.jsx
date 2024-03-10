import DepartmentIcon from '../assets/department-icon.svg?react';
import ProjectIcon from '../assets/project-icon.svg?react';
import TaskIcon from '../assets/task-icon.svg?react';
import TeamIcon from '../assets/team-icon.svg?react';
import UserIcon from '../assets/user-icon.svg?react';

const CONSTANTS = {
  PAGES: {
    DEPARTMENTS: '/departments',
    PROJECTS: '/projects',
    SKILS: '/skills',
    HOME: '/',
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
    PERSONAL: {
      NAME: 'Personal',
      URL: '/personal',
      ICON: <UserIcon />,
    },
    TEAM: {
      NAME: 'Team',
      URL: '/team',
      ICON: <TeamIcon />,
    },
    PROJECTS: {
      NAME: 'Projects',
      URL: '/projects',
      ICON: <ProjectIcon />,
    },
  },
  NAVIGATION_PAGES: {
    HOME: {
      NAME: 'Home',
      URL: '/',
    },
    ADDITIONAL_CONTEXT: {
      NAME: 'Additional Contex',
      URL: '/additional-contex',
    },
    NOTIFICATION: {
      NAME: 'Notification',
      URL: '/notification',
    },
  },
};

export default CONSTANTS;
