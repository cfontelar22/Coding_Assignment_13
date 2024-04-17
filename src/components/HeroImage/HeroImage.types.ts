export interface HeroImageProps {
  imageUrl: string;
  title: string;
  subtitle: string;
  description: string;
  disabled?: boolean; 
  onClick?: () => void; 
}
