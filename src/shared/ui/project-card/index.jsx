import { Card, Text, CardBody, Heading, Tag } from '@chakra-ui/react';
import { CustomDate, Progress, AvatarGroup } from 'src/shared/ui';
import { ProjectOptionButton } from 'src/features';
import { CardOption, TopContainer, BottomContainer } from './index.styled';

export const ProjectCard = ({ project, members }) => {
  return (
    <Card
      maxW='260px'
      m='0 16px 16px 0'
      colorScheme='blue'
      shadow='none'
      borderRadius='12px'
      border='1px solid var(--grey-200, #e2e8f0)'>
      <CardBody display='flex' flexDir='column' justifyContent='space-between'>
        <TopContainer>
          <CardOption>
            <Tag colorScheme='blue' fontWeight='600' fontSize='12px'>
              {project.status}
            </Tag>
            <ProjectOptionButton project={project} />
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
          <CustomDate date={project.endDate} description='Due Date' />
          <Progress progress={project.progress} fontWeight='600' fontSize='12px' />
          <AvatarGroup list={members} />
        </BottomContainer>
      </CardBody>
    </Card>
  );
};
