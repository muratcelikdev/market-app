import styled from 'styled-components';

import * as colors from 'common/colors';

const StyledProductImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 124px;
  height: 124px;

  padding: 16px;

  border: 1.2px solid ${colors.grey100};
  border-radius: 12px;
`;

const StyledProductImageContainer = styled.div`
  width: 92px;
  height: 92px;

  background-color: ${colors.grey300};
`;

const ProductImage = (): JSX.Element => {
  return (
    <StyledProductImageWrapper>
      <StyledProductImageContainer />
    </StyledProductImageWrapper>
  );
};

export default ProductImage;
