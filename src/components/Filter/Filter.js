import { FormControl } from '@mui/material';
import { StyledInput, StyledInputLable } from 'components/styled/styledMui';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filter';
import { selectFilter } from 'redux/contacts/selector';

const Filter = () => {
  const dispatch = useDispatch();

  const onFilterChange = query => {
    dispatch(setFilter(query.toLowerCase()));
  };
  const filter = useSelector(selectFilter);

  return (
    <FormControl
      sx={{ width: '48ch', mr: 'auto', ml: 'auto' }}
      variant="standard"
      autoComplete="off"
    >
      <StyledInputLable htmlFor="standard-search-by-name">
        Find your contact *
      </StyledInputLable>
      <StyledInput
        id="standard-search-by-name"
        type="search"
        name="filterContact"
        value={filter}
        onChange={e => onFilterChange(e.target.value)}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
    </FormControl>
  );
};

export default Filter;
