import React from 'react';
import styled from 'styled-components';

interface InputFieldProps extends React.InputHTMLAttributes<HTMLInputElement> {
  backgroundColor?: string;
}

const Input = styled.input<InputFieldProps>`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  box-sizing: border-box;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'text')};
  background-color: ${({ disabled, backgroundColor }) => (disabled ? '#f5f5f5' : backgroundColor || '#fff')};
  color: ${({ disabled }) => (disabled ? '#999' : '#333')};
`;

// Use React.forwardRef to allow ref forwarding
const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
  ({ backgroundColor, ...props }, ref) => {
    return <Input ref={ref} {...props} backgroundColor={backgroundColor} />;
  }
);

InputField.displayName = 'InputField';

export default InputField;
export type { InputFieldProps };
