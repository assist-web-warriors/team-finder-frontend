import { useLocation, useNavigate } from 'react-router-dom';
import {
  CalendarIcon,
  TimeIcon,
  EditIcon,
  CopyIcon,
  AtSignIcon,
  ArrowForwardIcon,
} from '@chakra-ui/icons';
import { Text, Tag, TagLabel, Button } from '@chakra-ui/react';
import { CustomDate, PageTitle, Progress, AvatarGroup } from 'src/shared/ui';
import { Container, GridContainer, Info, Box, ProgressBox, PeriodBox } from './index.styled';
import { users } from '../mockData';

export const ViewProjectDetails = () => {
  const { state: project } = useLocation();
  const navigate = useNavigate();

  const Option = ({ text, icon }) => (
    <Info>
      {icon && icon}
      <Text color='var(--grey-dark, #596274)' fontWeight='600'>
        {text}
      </Text>
    </Info>
  );

  const Period = () => {
    const date1 = new Date(project.startDate);
    const date2 = new Date(project.endDate);

    let differenceInMonths =
      (date2.getFullYear() - date1.getFullYear()) * 12 + date2.getMonth() - date1.getMonth();

    let differenceInDays = (date2 - date1) / (1000 * 3600 * 24);

    return (
      <Box>
        <Text color='gray'>
          Period:{' '}
          {differenceInMonths === 1
            ? '1 Month'
            : differenceInMonths > 1
              ? differenceInMonths + ' Months'
              : differenceInDays + ' Days'}
        </Text>

        <PeriodBox>
          <CustomDate date={project.startDate} border='none' description='Start Date' />
          <ArrowForwardIcon />
          <CustomDate date={project.endDate} border='none' description='End Date' />
        </PeriodBox>
      </Box>
    );
  };

  return (
    <Container>
      <PageTitle title={project.title}>
        <Button onClick={() => navigate(-1)} variant='outline' colorScheme='blue'>
          Back
        </Button>
      </PageTitle>
      <GridContainer>
        <Option icon={<CalendarIcon color='gray' />} text='Timeline' />
        <Period />

        <Option icon={<TimeIcon color='gray' />} text='Status' />
        <ProgressBox>
          {project.progress ? (
            <Progress progress={project.progress} fontWeight='600' fontSize='14px' />
          ) : (
            <Text color='gray'>Status...</Text>
          )}
        </ProgressBox>

        <Option icon={<EditIcon color='gray' />} text='Description' />
        <Box>
          {project.description ? project.description : <Text color='gray'>Description...</Text>}
        </Box>

        <Option icon={<CopyIcon color='gray' />} text='Technology Stack' />
        <Box>
          {project.stack &&
            project.stack.map((item) => (
              <Tag key={item} size='lg' variant='outline' h='44px' mr='8px'>
                <TagLabel color='black' fontWeight='600'>
                  {item}
                </TagLabel>
              </Tag>
            ))}
        </Box>

        <Option icon={<AtSignIcon color='gray' />} text='Members' />
        <Box>
          <Text fontWeight='600' fontSize='14px' color='var(--black, #1C1C1E)'>
            Curent Members
          </Text>
          <AvatarGroup list={users} max={3} size='sm' mb='24px' />
          <Text fontWeight='600' fontSize='14px'>
            Ex - Members
          </Text>
          <AvatarGroup list={users.slice(3, 4)} max={3} size='sm' />
        </Box>
      </GridContainer>
    </Container>
  );
};
