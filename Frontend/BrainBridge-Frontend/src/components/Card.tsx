import './Card.css';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'sm' | 'md' | 'lg';
  hover?: boolean;
}

const Card = ({ 
  children, 
  className = '', 
  padding = 'md',
  hover = false 
}: CardProps) => {
  return (
    <div className={`card card-padding-${padding} ${hover ? 'card-hover' : ''} ${className}`}>
      {children}
    </div>
  );
};

export default Card;
