import React from 'react';
import styled from 'styled-components';

export interface TableProps {
  categories: string[];
  onClickCategory?: (category: string) => void;
  backgroundColor?: string;
  disabled?: boolean;
  onMouseEnter?: () => void;
}

const TableContainer = styled.table`
  width: 80%;
  margin: 0 auto;
  border-collapse: collapse;
`;

// Utilizing shouldForwardProp to prevent backgroundColor from being forwarded to the DOM
const CategoryRow = styled.tr.withConfig({
  shouldForwardProp: (propName) => !['backgroundColor', 'disabled'].includes(propName),
})<{ backgroundColor?: string; disabled?: boolean }>`
  background-color: ${({ backgroundColor }) => backgroundColor || '#327573'};
  color: white;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    background-color: ${({ backgroundColor, disabled }) => !disabled ? '#29516b' : backgroundColor || '#327573'}; 
  }
`;

const CategoryCell = styled.td`
  padding: 10px;
  border: 1px solid #ddd;
  text-align: center;
  text-transform: uppercase;
`;

const Table: React.FC<TableProps> = ({ categories, onClickCategory, backgroundColor, disabled, onMouseEnter }) => {
  const handleClickCategory = (category: string) => {
    if (onClickCategory && !disabled) {
      onClickCategory(category);
    }
  };

  return (
    <TableContainer>
      <thead>
        <tr>
          <th>Categories</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((category, index) => (
          <CategoryRow
            key={index}
            backgroundColor={backgroundColor}
            disabled={disabled}
            onClick={() => handleClickCategory(category)}
            onMouseEnter={onMouseEnter}
          >
            <CategoryCell>{category}</CategoryCell>
          </CategoryRow>
        ))}
      </tbody>
      <tfoot>
        <tr>
          <td>Total categories: {categories.length}</td>
        </tr>
      </tfoot>
    </TableContainer>
  );
};

export default Table;
