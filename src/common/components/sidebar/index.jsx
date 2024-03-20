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
        bgColor={'white'}
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
          <Link to={CONSTANTS.PAGES.PERSONAL}>
            <Button
              width={'147px'}
              height={'32px'}
              fontSize={'xs'}
              textAlign={'center'}
              gap={'8px'}>
              View Profile
              <ExternalLinkIcon />
            </Button>
          </Link>
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
            key={index}
            alignItems={'center'}
            borderLeft={
              location.pathname.includes(value.URL) ? '3px #0356E8 solid' : '3px transparent solid'
            }
            borderRadius={'3px'}
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
