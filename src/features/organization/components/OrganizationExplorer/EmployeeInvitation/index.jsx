import Container from './index.styled';
import { CopyIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightAddon, useToast } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { Header } from 'src/common';
import CONSTANTS from 'src/common/constants';
import { selectUserData } from 'src/entities/user';

const EmployeeInvitation = () => {
  const toast = useToast();
  const session = useSelector(selectUserData);
  const url = `https:/${window.location.host}${CONSTANTS.PAGES.SIGN_UP_AS_EMPLOYEE}?organization_id=${session.organization}`;

  const handleClick = async () => {
    try {
      const permission = await navigator.permissions.query({ name: 'clipboard-read' });
      if (permission.state === 'granted' || permission.state === 'prompt') {
        await navigator.clipboard.writeText(url);
      } else {
        alert('Permission denied for clipboard access.');
      }
      toast({
        title: 'The link was copied to clipboard.',
        status: 'success',
        isClosable: true,
      });
    } catch (error) {
      throw Error(error);
    }
  };

  return (
    <Container>
      <Header
        headingLabel={'Invitation Link'}
        textLabel={'Use the following link to register your new employees.'}
      />
      <InputGroup>
        <Input value={url} readOnly={true} />
        <InputRightAddon onClick={handleClick} cursor={'pointer'}>
          <CopyIcon pointerEvents={'none'} />
        </InputRightAddon>
      </InputGroup>
    </Container>
  );
};
export default EmployeeInvitation;
