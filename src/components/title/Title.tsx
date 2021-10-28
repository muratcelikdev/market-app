import styled from 'styled-components';

import * as colors from 'common/colors';
import { TitleProps } from 'common/interfaces';

const StyledTitle = styled.h1`
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: 0.25px;

  color: ${colors.black300};
`;

const Title = ({ text }: TitleProps): JSX.Element => <StyledTitle>{text}</StyledTitle>;

export default Title;
