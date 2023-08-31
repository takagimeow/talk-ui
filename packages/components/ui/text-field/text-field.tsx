import { cva } from '../../styled-system/css';

const textField = cva({
  base: {
    backgroundColor: 'cyan',
    border: 'none',
    borderRadius: '4px',
  },
});

const TextField = () => {
  return <input aria-label="Text Field" className={textField()} />;
};

export default TextField;
