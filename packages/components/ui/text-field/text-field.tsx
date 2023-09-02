import { cva } from '../../styled-system/css';
// import { textField } from '../../styled-system/recipes';

const textField = cva({
  base: {
    width: '100%',
    borderRadius: '8px',
    boxShadow: '1.5px 1.5px 8px 8px rgba(0, 0, 0, 0.1)',
    padding: '16px',
    border: '1px solid #E5E5E5',
  },
});

const TextField = () => {
  return <input aria-label="Text Field" className={textField()} />;
};

export default TextField;
