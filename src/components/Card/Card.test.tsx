import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card Component', () => {
  const mockOnClick = jest.fn();
  const cardProps = {
    title: 'Project 1',
    subtitle: 'Point to Point Network Wireless Bridge',
    description: 'This project is all about implementing one hop to the other hop wireless bridge.',
    image: 'https://via.placeholder.com/300',
    onClick: mockOnClick,
  };

  it('renders correctly', () => {
    render(<Card {...cardProps} />);
    expect(screen.getByText(cardProps.title)).toBeInTheDocument();
    expect(screen.getByText(cardProps.subtitle)).toBeInTheDocument();
    expect(screen.getByText(cardProps.description)).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute('src', cardProps.image);
  });

  it('calls onClick when not disabled', () => {
    render(<Card {...cardProps} />);
    fireEvent.click(screen.getByText(cardProps.title));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });

  it('does not call onClick when disabled', () => {
    render(<Card {...cardProps} disabled={true} />);
    fireEvent.click(screen.getByText(cardProps.title));
    expect(mockOnClick).not.toHaveBeenCalled();
  });
});
