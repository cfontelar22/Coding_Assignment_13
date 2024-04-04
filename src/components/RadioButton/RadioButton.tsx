import React from 'react';
import styled from 'styled-components';

export interface RadioProps {
  label: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

const Container = styled.label<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
`;

const Input = styled.input<{ disabled?: boolean }>`
  margin-right: 8px;
`;

const RadioButton: React.FC<RadioProps> = ({ label, checked = false, disabled = false, onChange }) => {
  const handleChange = () => {
    if (!disabled && onChange) {
      onChange(!checked);
    }
  };

  return (
    <Container disabled={disabled}>
      <Input type="radio" checked={checked} onChange={handleChange} disabled={disabled} />
      {label}
    </Container>
  );
};

export default RadioButton;
