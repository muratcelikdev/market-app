import styled from 'styled-components';

import * as colors from 'common/colors';
import { SubtitleProps } from 'common/interfaces';

const StyledSubtitle = styled.h2`
  font-size: 13px;
  font-weight: 600;

  color: ${colors.black100};
`;

const Subtitle = ({ text, className }: SubtitleProps): JSX.Element => (
  <StyledSubtitle className={className}>{text}</StyledSubtitle>
);

export default Subtitle;
