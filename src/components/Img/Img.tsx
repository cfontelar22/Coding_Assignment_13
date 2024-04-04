import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Styled component for the image
const StyledImg = styled.img<{ disabled?: boolean }>`
  max-width: 100%;
  height: auto;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const Container = styled.div<{ backgroundColor?: string }>`
  background-color: ${({ backgroundColor }) => backgroundColor || 'transparent'};
`;

interface ImgProps {
  src: string;
  alt: string;
  className?: string;
  backgroundColor?: string;
  disabled?: boolean; 
}

const Img: React.FC<ImgProps> = ({ src, alt, className, backgroundColor, disabled, ...rest }) => {
  return (
    <Container backgroundColor={backgroundColor}>
      <StyledImg src={src} alt={alt} className={className} disabled={disabled} {...rest} />
    </Container>
  );
};

Img.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  backgroundColor: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Img;
export type { ImgProps };
