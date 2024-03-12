import {
  Card,
  Text,
  CardBody,
  Heading,
  Tag,
  Progress,
  Avatar,
  AvatarGroup,
} from '@chakra-ui/react';
import { CustomDate, CustomEditButton } from 'src/shared/ui';
import { CardOption, TopContainer, BottomContainer } from './index.styled';

const ProjectCard = ({ project }) => {
  return (
    <Card
      maxW='260px'
      m='0 16px 16px 0'
      colorScheme='blue'
      shadow='none'
      borderRadius='12px'
      border='1px solid var(--grey-200, #e2e8f0)'>
      <CardBody>
        <TopContainer>
          <CardOption>
            <Tag colorScheme='blue' fontWeight='600' fontSize='12px'>
              {project.status}
            </Tag>
            <CustomEditButton />
          </CardOption>

          <Heading m='8px 0' fontSize='24px'>
            {project.title}
          </Heading>

          <Text color='gray' fontSize='13px'>
            {project.description.length > 120
              ? `${project.description.slice(0, 120)}...`
              : project.description}
          </Text>
        </TopContainer>
        <BottomContainer>
          <CustomDate dueDate={project.dueDate} />

          <CardOption>
            <Text fontWeight='600' fontSize='12px'>
              Progress
            </Text>
            <Text fontWeight='600' fontSize='12px'>
              {project.progress}%
            </Text>
          </CardOption>

          <Progress
            colorScheme='blue'
            borderRadius='12px'
            m='8px 0'
            size='sm'
            value={project.progress}
          />
          <AvatarGroup size='sm' max={2}>
            <Avatar name='Ryan Florence' src='https://bit.ly/ryan-florence' />
            <Avatar name='Segun Adebayo' src='https://bit.ly/sage-adebayo' />
          </AvatarGroup>
        </BottomContainer>
      </CardBody>
    </Card>
  );
};

export default ProjectCard;
