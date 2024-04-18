import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

export interface LabelProps {
  text: string;
  disabled?: boolean;
  onClick?: () => void;
  onMouseEnter?: () => void; // Add onMouseEnter prop
}

const StyledLabel = styled.label<{ disabled?: boolean; clicked?: boolean; hovered?: boolean }>`
  /* Define styles for the label */
  color: ${({ disabled, clicked }) => (disabled ? '#ccc' : clicked ? 'green' : 'black')}; /* Change color when clicked */
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  margin-bottom: 16px; /* Add margin for spacing */
  padding: 10px 10px;
  text-decoration: ${({ clicked }) => (clicked ? 'underline' : 'none')}; /* Underline if clicked */

  &:hover {
    color: ${({ disabled, clicked }) => (disabled ? '#ccc' : clicked ? 'green' : 'blue')}; /* Change color on hover */
  }
`;

const Label: React.FC<LabelProps> = ({ text, disabled, onClick, onMouseEnter }) => {
  const [clicked, setClicked] = useState<boolean | undefined>(false); // State to track clicked state

  const handleClick = () => {
    if (onClick && !disabled) {
      onClick();
      setClicked(true); // Set clicked state to true when clicked
      console.log(`Label "${text}" clicked`); // Log message to console
    }
  };

  const handleMouseEnter = () => {
    if (onMouseEnter && !disabled) {
      onMouseEnter();
      console.log(`Label "${text}" hovered`); // Log message to console
    }
  };

  return (
    <StyledLabel
      disabled={disabled}
      clicked={clicked ? true : undefined} // Pass clicked only if true, otherwise omit
      onMouseEnter={handleMouseEnter} // Pass onMouseEnter event handler
      onClick={handleClick}
    >
      {text}
    </StyledLabel>
  );
};


Label.propTypes = {
  text: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  onMouseEnter: PropTypes.func, // Add PropTypes for onMouseEnter
};

export default Label;
