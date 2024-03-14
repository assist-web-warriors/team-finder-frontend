import { Avatar, AvatarGroup as ChakraAvatarGroup } from '@chakra-ui/react';

export const AvatarGroup = ({ list, max, ...props }) => {
  return (
    <ChakraAvatarGroup size='sm' max={max} {...props}>
      {list && list.map((user) => <Avatar key={user.email} name={user.name} src={user.img} />)}
    </ChakraAvatarGroup>
  );
};
