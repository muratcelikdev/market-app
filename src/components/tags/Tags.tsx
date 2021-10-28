import { useState } from 'react';
import styled from 'styled-components';

import Tag from 'components/tag/Tag';

import { FlexBox } from 'styles/components';

interface ITags {
  tags: Array<string>;
  className?: string;
}

const StyledTagsContainer = styled(FlexBox)``;

const Tags = ({ tags, className }: ITags): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderTags = () =>
    tags.map((tag, index) => (
      <Tag
        text={tag}
        active={activeIndex === index}
        onSelect={() => setActiveIndex(activeIndex === index ? null : index)}
      />
    ));

  return (
    <StyledTagsContainer wrap gap={8} className={className}>
      {renderTags()}
    </StyledTagsContainer>
  );
};

export default Tags;
