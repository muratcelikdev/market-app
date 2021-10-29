import { useState, useEffect } from 'react';
import styled from 'styled-components';

import { TagsProps } from 'common/interfaces';

import Tag from 'components/tag/Tag';

import { FlexBox } from 'styles/components';

const StyledTagsContainer = styled(FlexBox)``;

const Tags = ({ tags, className, onSelect }: TagsProps): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleSelection = (index: number | null) => {
    setActiveIndex(activeIndex === index ? null : index);
    onSelect(index === null ? null : tags[index]);
  };

  const renderTags = () =>
    tags.map((tag, index) => (
      <Tag
        text={tag}
        active={activeIndex === index}
        onSelect={() => handleSelection(activeIndex === index ? null : index)}
      />
    ));

  return (
    <StyledTagsContainer wrap gap={8} className={className}>
      {renderTags()}
    </StyledTagsContainer>
  );
};

export default Tags;
