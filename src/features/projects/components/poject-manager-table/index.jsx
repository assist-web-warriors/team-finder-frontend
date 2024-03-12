import { UserTable } from 'src/shared/ui';
import { Container } from './index.styled';

export const PojectManagerTable = ({ users, columnHeaders }) => {
  return (
    <Container>
      <UserTable users={users} columnHeaders={columnHeaders} />
    </Container>
  );
};
