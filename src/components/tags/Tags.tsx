import { useState } from 'react';
import styled from 'styled-components';

import Tag from 'components/tag/Tag';

interface ITags {
  tags: Array<string>;
}

const StyledTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tags = ({ tags }: ITags): JSX.Element => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const renderTags = () =>
    tags.map((tag, index) => (
      <Tag
        text={tag}
        active={activeIndex === index}
        onSelect={() => setActiveIndex(activeIndex === index ? null : index)}
      />
    ));

  return <StyledTagsContainer>{renderTags()}</StyledTagsContainer>;
};

export default Tags;
