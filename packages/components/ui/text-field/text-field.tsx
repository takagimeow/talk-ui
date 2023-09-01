import { cva } from '../../styled-system/css';
import { textField } from '../../styled-system/recipes';

// const textField = cva({});

const TextField = () => {
  return <input aria-label="Text Field" className={textField()} />;
};

export default TextField;
