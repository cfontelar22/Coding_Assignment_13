export interface CardProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    backgroundColor?: string;
    onClick?: () => void;
    disabled?: boolean;
  }
  