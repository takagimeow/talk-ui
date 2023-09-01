import TextField from './text-field';
import { textField } from '../../styled-system/recipes';
export function Default() {
  return <TextField />;
}
Default.parameters = { chromatic: { disable: false }, args: { ...textField.raw({}) } };
export default { title: 'Components/TextField' };
