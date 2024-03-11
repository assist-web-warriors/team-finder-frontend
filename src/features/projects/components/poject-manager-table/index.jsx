import { CustomTable } from 'src/shared/ui/custom-table';
import { Container } from './index.styled';

const PojectManagerTable = ({ users, columnHeaders }) => {
  return (
    <Container>
      <CustomTable users={users} columnHeaders={columnHeaders} />
    </Container>
  );
};

export default PojectManagerTable;
