import React from 'react';
import styled from 'styled-components';

interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  disabled?: boolean;
  onClick?: () => void;
  backgroundColor?: string; 
}

const Container = styled.div<{ backgroundColor?: string }>`
  position: relative;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor}; // Apply background color here
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const Content = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #fff;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 16px;
`;

const Subtitle = styled.h2`
  font-size: 24px;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 16px;
`;

const Overlay = styled.div<{ disabled?: boolean }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
`;

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  title,
  subtitle,
  description,
  disabled,
  onClick,
  backgroundColor, 
}) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Container backgroundColor={backgroundColor}> {/* Pass backgroundColor prop to Container */}
      <Image src={imageUrl} alt={title} />
      <Overlay disabled={disabled} onClick={handleClick} />
      <Content>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Description>{description}</Description>
      </Content>
    </Container>
  );
};

export default HeroImage;
