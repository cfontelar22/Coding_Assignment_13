export interface TableProps {
  categories: string[];
  onClickCategory?: (category: string) => void;
  disabled?: boolean;
}

export default TableProps;
