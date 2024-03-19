import { useState } from 'react';
import { Button } from '@chakra-ui/react';
import { AddIcon } from '@chakra-ui/icons';
import { Table } from 'src/common';
import { CustomSelectOption } from 'src/shared/ui';
import { columns } from './lib/constants';
import { Options, SelectWrapper } from '../index.styled';

export const AddNewSkill = ({ data, categories }) => {
  const [sortBy, setSortBy] = useState('department');

  const handleSelectChange = (e) => {
    const sortByValue = e.target.value;
    setSortBy(sortByValue);
  };

  const sortedData = [...data].sort((a, b) => {
    if (sortBy && a[sortBy] && b[sortBy]) {
      return a[sortBy].localeCompare(b[sortBy]);
    }
    return 0;
  });

  return (
    <>
      <Options>
        <Button leftIcon={<AddIcon />} h='44px' colorScheme='blue'>
          Add New Skill
        </Button>
        <SelectWrapper>
          <CustomSelectOption
            list={[
              { option: 'Department', value: 'department' },
              { option: 'Category', value: 'category' },
              { option: 'Author', value: 'author' },
            ]}
            onChange={handleSelectChange}
          />
        </SelectWrapper>
      </Options>
      <Table columns={columns} data={sortedData || []} />
    </>
  );
};
