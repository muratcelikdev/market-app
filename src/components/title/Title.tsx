import styled from 'styled-components';

import * as colors from 'common/colors';

interface ITitle {
  text: string;
}

const StyledTitle = styled.h1`
  font-size: 20px;
  line-height: 1.3;
  letter-spacing: 0.25px;

  color: ${colors.black300};
`;

const Title = ({ text }: ITitle): JSX.Element => <StyledTitle>{text}</StyledTitle>;

export default Title;
