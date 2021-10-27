import { useState, useEffect, ChangeEvent } from 'react';
import styled from 'styled-components';

import * as colors from 'common/colors';

interface ISearchbox {
  placeholderText: string;
  onSearch: (string) => void;
  className?: string;
}

const StyledSearchbox = styled.input.attrs({
  type: 'search',
})`
  width: 100%;
  height: 48px;

  padding: 12px 16px;

  border: 2px solid ${colors.grey400};
  border-radius: 2px;

  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.15px;

  color: ${colors.black100};

  ::placeholder,
  ::-webkit-input-placeholder {
    color: ${colors.grey460};
  }
`;

const Searchbox = ({ placeholderText, onSearch, className }: ISearchbox): JSX.Element => {
  const [searchText, setSearchText] = useState<string>('');

  useEffect(() => {
    onSearch(searchText);
  }, [searchText, onSearch]);

  const handleSearchTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setSearchText(event.target.value);
  };

  return (
    <StyledSearchbox
      className={className}
      placeholder={placeholderText}
      onChange={(event) => handleSearchTextChange(event)}
    />
  );
};

export default Searchbox;
