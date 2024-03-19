import { useState } from 'react';
import {
  Tabs as ChakraTabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
} from '@chakra-ui/react';
import { PageTitle } from 'src/shared/ui';
import { Container, TabContainer } from './index.styled';
import { AddNewSkill } from '../components/add-new-skill';
import { AddNewSkillCategory } from '../components/add-new-skill-category';

export const SkillComponent = ({ data, categories }) => {
  return (
    <Container>
      <PageTitle title='Skills' />
      <ChakraTabs>
        <TabContainer>
          <TabList display='flex' justifyContent='space-around'>
            <Tab>Add New Skill</Tab>
            <Tab>Department Skills</Tab>
            <Tab>Department Members Skills</Tab>
            <Tab>My skill</Tab>
          </TabList>
          <TabIndicator mt='-1.5px' height='2px' bg='blue.500' borderRadius='1px' />
        </TabContainer>
        <TabPanels>
          <TabPanel p='0'>
            <AddNewSkill data={data} />
            <AddNewSkillCategory data={categories} />
          </TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
          <TabPanel></TabPanel>
        </TabPanels>
      </ChakraTabs>
    </Container>
  );
};
