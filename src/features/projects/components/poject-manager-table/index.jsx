import { UserTable } from 'src/shared/ui';
import { Container } from './index.styled';

export const PojectManagerTable = ({ members, columnHeaders }) => {
  return (
    <Container>
      <UserTable users={members} columnHeaders={columnHeaders} />
    </Container>
  );
};
