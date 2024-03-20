import Container from './index.styled';
import { Header, Table } from 'src/common';
import { useDispatch, useSelector } from 'react-redux';
import { useGetMembersQuery } from 'src/entities/user/api/user-api';
import { useEffect } from 'react';
import { setMembersItems } from 'src/entities/user/model/user-slice';
import { useViewColumns } from 'src/features/organization/hooks';

const ViewUsers = () => {
  const columns = useViewColumns();
  const members = useSelector((store) => store.user.members);
  const dispatch = useDispatch();
  const { data: fetchedMembers, refetch } = useGetMembersQuery();

  useEffect(() => {
    refetch();
    if (fetchedMembers) {
      dispatch(setMembersItems(fetchedMembers));
    }
  }, [dispatch, refetch, fetchedMembers]);

  return (
    <Container>
      <Header
        headingLabel={'Employees'}
        textLabel={'View and navigate through your onboarded employees.'}
      />
      <Table columns={columns} data={members} />
    </Container>
  );
};
export default ViewUsers;
