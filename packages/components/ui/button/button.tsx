import { CSSProperties } from 'react';
import { cva, type RecipeVariantProps } from '../../styled-system/css';

const buttonStyle = cva({
  base: {
    width: '100%',
    borderRadius: '25px',
    padding: '10px',
    color: 'white',
    fontWeight: 'bold',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  variants: {
    visual: {
      primary: {
        backgroundColor: 'rgba(39, 69, 237, 1.0)',
        '&:hover': {
          backgroundColor: 'rgba(39, 69, 237, 0.8)',
        },
      },
      secondary: {
        backgroundColor: 'rgba(172, 179, 191, 1.0)',
      },
    },
  },
});

export type ButtonVariants = RecipeVariantProps<typeof buttonStyle>;

type Props = CSSProperties &
  ButtonVariants & {
    children: React.ReactNode;
  };

const Button = ({ visual, translate: _, children, ...rest }: Props) => {
  return (
    <button
      aria-label="Button"
      className={buttonStyle({
        visual,
      })}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
