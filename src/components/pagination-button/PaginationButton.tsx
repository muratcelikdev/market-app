import styled from 'styled-components';

import { PaginationButtonProps } from 'common/interfaces';
import * as colors from 'common/colors';

import { FlexBoxCentered } from 'styles/components';

const StyledPaginationButton = styled(FlexBoxCentered).attrs({ as: 'button' })`
  height: 40px;
`;

const StyledPaginationButtonText = styled.div`
  font-size: 14px;
  font-weight: 600;

  color: ${colors.black100};

  cursor: pointer;

  &:hover {
    color: ${colors.base};
  }
`;

const PaginationButton = ({ type, onClick, className }: PaginationButtonProps): JSX.Element => {
  return (
    <StyledPaginationButton onClick={onClick} className={className}>
      <StyledPaginationButtonText>{type}</StyledPaginationButtonText>
    </StyledPaginationButton>
  );
};

export default PaginationButton;
