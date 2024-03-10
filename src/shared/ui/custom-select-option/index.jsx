import { Select } from '@chakra-ui/react';

export const CustomSelectOption = ({ list, ...props }) => {
  return (
    <Select {...props} border='1px solid #0356E8' color='blue' h='48px'>
      {list &&
        list.map((item) => (
          <option value={item.value} key={item.value}>
            {item.option}
          </option>
        ))}
    </Select>
  );
};
export default CustomSelectOption;
