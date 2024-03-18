import { Avatar, Button, Flex, Heading, Text } from '@chakra-ui/react';
import Container from './index.styled';
import CONSTANTS from 'src/common/constants';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLinkIcon } from '@chakra-ui/icons';
import { useSelector } from 'react-redux';

const Sidebar = () => {
  const location = useLocation();
  const constants = Object.values(CONSTANTS.SIDEBAR_PAGES);
  const user = useSelector((store) => store.user);

  return (
    <Container>
      <Flex
        bgColor={'#fff'}
        gap={'28px'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        padding={'20px'}
        borderRadius={'16px'}>
        <Avatar name={user.session.name} size={'xl'} marginTop={'calc(2rem * -1)'} />
        <Flex direction={'column'} gap={'16px'} justifyContent={'center'} alignItems={'center'}>
          <Flex direction={'column'} gap={'6px'} alignItems={'center'}>
            <Heading color={'black'} fontSize={'lg'}>
              {user.session.name}
            </Heading>
            <Text fontSize='xs'>{user.session.email}</Text>
          </Flex>
          <Button width={'147px'} height={'32px'} fontSize={'xs'} textAlign={'center'}>
            View Profile
            <ExternalLinkIcon />
          </Button>
        </Flex>
      </Flex>
      <Flex
        color={'black'}
        gap={'15px'}
        alignItems={'flex-start'}
        fontSize={'lg'}
        borderRadius={'16px'}
        bgColor={'#fff'}
        direction={'column'}
        fontWeight={'400'}
        height={'100%'}
        padding={'24px'}>
        {constants.map((value, index) => (
          <Flex
            alignItems={'center'}
            borderLeft={location.pathname === value.URL ? '3px #0356E8 solid' : ''}
            padding={'3px'}
            gap={'8px'}>
            {value.ICON}
            <Link to={value.URL}>{value.NAME}</Link>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};
export default Sidebar;
