import React from 'react';
import styled, { css } from 'styled-components';

interface CardProps {
  title: string;
  subtitle?: string;
  description?: string;
  image: string;
  backgroundColor?: string;
  onClick?: () => void;
  disabled?: boolean;
}

const StyledCard = styled.div<{ disabled?: boolean; backgroundColor?: string }>`
  width: 300px;
  background-color: ${({ backgroundColor }) => backgroundColor || '#fff'};
  border-radius: 10px;
  border: 2px solid #000;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition: transform 0.2s;
  pointer-events: ${({ disabled }) => (disabled ? 'none' : 'auto')}; // Add this line

  &:hover {
    transform: ${({ disabled }) => (disabled ? 'none' : 'scale(1.02)')};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      border-color: #ccc;
    `}
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h3`
  margin: 0 0 8px;
`;

const Subtitle = styled.p`
  margin: 0 0 4px;
  font-size: 14px;
  color: #666;
`;

const Description = styled.p`
  margin: 0;
  font-size: 16px;
  color: #333;
`;

const Card: React.FC<CardProps> = ({ title, subtitle, description, image, backgroundColor, disabled, onClick }) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <StyledCard backgroundColor={backgroundColor} disabled={disabled} onClick={handleClick}>
      <Image src={image} alt={title} />
      <Content>
        <Title>{title}</Title>
        {subtitle && <Subtitle>{subtitle}</Subtitle>}
        {description && <Description>{description}</Description>}
      </Content>
    </StyledCard>
  );
};

export default Card;
