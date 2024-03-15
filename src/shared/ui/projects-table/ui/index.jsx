import {
  Table,
  TableContainer,
  Tag,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  Heading,
  Text,
  Progress,
} from '@chakra-ui/react';
import { CustomDate, AvatarGroup } from 'src/shared/ui';
import { HeaderBlock } from './index.styled';
import { ProjectOptionButton } from 'src/features';

export const ProjectsTable = ({ projects, members, columnHeaders }) => {
  return (
    <TableContainer>
      <Table>
        <Thead>
          <Tr height='50px'>
            {columnHeaders && columnHeaders.map((header) => <Th key={header}>{header}</Th>)}
          </Tr>
        </Thead>
        <Tbody>
          {projects &&
            projects.map((project) => {
              return (
                <Tr key={project.title}>
                  <Td>
                    <HeaderBlock>
                      <Heading m='8px 0' fontSize='13px'>
                        {project.title}
                      </Heading>
                      <Text color='gray' fontSize='12px' overflow='hidden'>
                        {project.description.length > 60
                          ? `${project.description.slice(0, 60)}...`
                          : project.description}
                      </Text>
                    </HeaderBlock>
                  </Td>
                  <Td>
                    <Tag colorScheme='blue' fontWeight='600' fontSize='12px'>
                      {project.status}
                    </Tag>
                  </Td>
                  <Td>
                    <CustomDate date={project.endDate} description='Due Date' />
                  </Td>
                  <Td>
                    <Progress
                      colorScheme='blue'
                      borderRadius='12px'
                      m='8px 0'
                      size='sm'
                      value={project.progress}
                    />
                  </Td>
                  <Td>
                    <AvatarGroup list={members} />
                  </Td>
                  <Td>
                    <ProjectOptionButton project={project} />
                  </Td>
                </Tr>
              );
            })}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
