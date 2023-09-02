import Button from './button';
// import { textField } from '../../styled-system/recipes';
export function Default() {
  return <Button visual="primary">Click Me</Button>;
}
Default.parameters = { chromatic: { disable: false } /*args: { ...textField.raw({}) }*/ };
export default { title: 'Components/Button' };

export function Secondary() {
  return <Button visual="secondary">Click Me</Button>;
}
Secondary.parameters = { chromatic: { disable: false } /*args: { ...textField.raw({}) }*/ };
