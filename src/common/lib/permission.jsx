import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { selectUserData } from 'src/entities/user';

const Permission = ({ children, forRoles = [] }) => {
  const session = useSelector(selectUserData);
  const shouldRender = useMemo(() => {
    const forRolesSet = new Set(forRoles);
    const sessionRoles = new Set(session.roles);
    return [...forRolesSet].some((role) => sessionRoles.has(role));
  }, [session, forRoles]);

  return shouldRender ? children : null;
};

export default Permission;
