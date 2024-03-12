import { Select } from '@chakra-ui/react';

export const CustomSelectOption = ({ list, ...props }) => {
  return (
    <Select color='blue' h='48px' {...props}>
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
