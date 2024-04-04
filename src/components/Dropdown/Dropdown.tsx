import React from 'react';
import styled from 'styled-components';

export interface DropdownProps {
  options: string[];
  defaultOption?: string;
  disabled?: boolean;
  onClick?: (selectedOption: string) => void;
  backgroundColor?: string; 
}

const Container = styled.div`
  position: relative;
  display: inline-block;
`;

const Select = styled.select<{ disabled?: boolean; backgroundColor?: string }>`
  padding: 8px 24px 8px 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: ${(props) => props.backgroundColor || (props.disabled ? '#f5f5f5' : '#fff')};
  color: ${(props) => (props.disabled ? '#999' : '#333')};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  width: 200px; 
  max-width: 100%;
`;

const Dropdown: React.FC<DropdownProps> = ({ options, disabled, onClick, backgroundColor }) => {
  const handleOptionClick = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedOption = e.target.value;
    console.log(`Option "${selectedOption}" clicked`);
    if (onClick) {
      onClick(selectedOption); 
    }
  };

  return (
    <Container>
      <Select disabled={disabled} onChange={handleOptionClick} backgroundColor={backgroundColor}>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </Select>
    </Container>
  );
};

export default Dropdown;
