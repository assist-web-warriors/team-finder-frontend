import { Avatar, Button, Flex, Heading, Text, border } from '@chakra-ui/react';
import Container from './index.styled';
import CONSTANTS from 'src/common/constants';
import { Link, useLocation } from 'react-router-dom';
import { ExternalLinkIcon, SunIcon } from '@chakra-ui/icons';

const Sidebar = () => {
  const location = useLocation();
  const constants = Object.values(CONSTANTS.SIDEBAR_PAGES);
  return (
    <Container>
      <Flex
        gap={'28px'}
        justifyContent={'center'}
        alignItems={'center'}
        direction={'column'}
        bgColor={'white'}
        width={'255px'}
        height={'202px'}
        borderRadius={'8px'}>
        <Avatar
          name='Segun Adebayo'
          src='https://bit.ly/sage-adebayo'
          size={'xl'}
          position={'relative'}
          marginTop={'calc(4rem * -1)'}
        />
        <Flex
          bgColor={'#fff'}
          direction={'column'}
          gap={'16px'}
          justifyContent={'center'}
          alignItems={'center'}>
          <Flex direction={'column'} gap={'6px'} bgColor={'#fff'}>
            <Heading bgColor={'#fff'} color={'black'} fontSize={'lg'}>
              Sam Smitch
            </Heading>
            <Text bgColor={'#fff'} fontSize='xs'>
              user@yahoo.com
            </Text>
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
        borderRadius={'8px'}
        width={'255px'}
        height={'408px'}
        bgColor={'#fff'}
        direction={'column'}
        fontWeight={'400'}
        padding={'24px'}
        paddingTop={'68px'}>
        {constants.map((value, index) => (
          <Flex
            borderLeft={location.pathname === value.URL ? '3px #0356E8 solid' : ''}
            bgColor={'#fff'}
            padding={'3px'}>
            <img src={value.ICON} alt='Icon'></img>
            <Link to={value.URL}>{value.NAME}</Link>
          </Flex>
        ))}
      </Flex>
    </Container>
  );
};
export default Sidebar;
