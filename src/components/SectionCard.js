import React from 'react';
import styled from 'styled-components';
import { Heading, Text } from 'rebass';
import ellipsis from 'text-ellipsis';
import PropTypes from 'prop-types';
import { Card } from './Card';
import ImageSubtitle from './ImageSubtitle';

const CoverImage = styled.img`
  width: 100%;
  object-fit: cover;
`;

const EllipsisHeading = styled(Heading)`
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-inline-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  border-bottom: ${props => props.theme.colors.primary} 5px solid;
`;

const SectionPost = ({ title, description, image, url, date, time }) => (
  <Card onClick={() => window.open(url, '_blank')} pb={4}>
    <EllipsisHeading m={3} p={1}>
      {title}
    </EllipsisHeading>
    <CoverImage src={image} height="200px" alt={title} />
    {description && <Text m={3}>{ellipsis(description, 120)}</Text>}
    <ImageSubtitle bg="primaryLight" color="white" x="right" y="bottom" round>
      {`${date}${time ? ` - ${Math.ceil(time)} min` : ''}`}
    </ImageSubtitle>
  </Card>
);

SectionPost.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  time: PropTypes.number,
};

SectionPost.defaultProps = {
  description: '',
  time: 0,
};

export default SectionPost;
