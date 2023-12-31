import React, { ChangeEvent, FC } from 'react';
import { Input, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

export interface SearchBarProps {
  handleChange: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder: string;
}

const SearchBar: FC<SearchBarProps> = ({ handleChange, placeholder }) => {
  let filterTimeout: NodeJS.Timeout;

  const handleSearchChange = (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    clearTimeout(filterTimeout);
    // TODO e.persist() should be removed once the upgrade to react v17 is done.
    // https://reactjs.org/docs/legacy-event-pooling.html
    e.persist();
    filterTimeout = setTimeout(() => {
      handleChange(e);
    }, 300);
  };

  return (
    <InputGroup>
      <InputGroupAddon addonType="prepend">
        <InputGroupText>{<FontAwesomeIcon icon={faSearch} />}</InputGroupText>
      </InputGroupAddon>
      <Input autoFocus onChange={handleSearchChange} placeholder={placeholder} />
    </InputGroup>
  );
};

export default SearchBar;
