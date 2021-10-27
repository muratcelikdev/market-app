import styled from 'styled-components';

import * as colors from 'common/colors';

interface ISubtitle {
  text: string;
  className?: string;
}

const StyledSubtitle = styled.h2`
  font-size: 13px;
  font-weight: 600;

  color: ${colors.black100};
`;

const Subtitle = ({ text, className }: ISubtitle): JSX.Element => (
  <StyledSubtitle className={className}>{text}</StyledSubtitle>
);

export default Subtitle;
