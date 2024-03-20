import EmployeeInvitation from './EmployeeInvitation';
import ViewUsers from './ViewUsers';
import Container from './index.styled';

const OrganizationExplorer = () => {
  return (
    <Container>
      <ViewUsers />
      <EmployeeInvitation />
    </Container>
  );
};
export default OrganizationExplorer;
