import department from '../../common/assets/department-icon.svg';
import project from '../../common/assets/project-icon.svg';
import task from '../../common/assets/task-icon.svg';
import team from '../../common/assets/team-icon.svg';
import user from '../../common/assets/user-icon.svg';
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
      ICON: { task },
    },
    DEPARTMENTS: {
      NAME: 'Departments',
      URL: '/departments',
      ICON: { department },
    },
    PERSONAL: {
      NAME: 'Personal',
      URL: '/personal',
      ICON: { user },
    },
    TEAM: {
      NAME: 'Team',
      URL: '/team',
      ICON: { team },
    },
    PROJECTS: {
      NAME: 'Projects',
      URL: '/projects',
      ICON: { project },
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
