import { Form } from 'react-bootstrap';

function InputField(props) {
  const { name, label, type, className, value, onChange } = props;

  const dynamicProps = type === 'checkbox' ? { checked: value } : {};

  return (
    <Form.Group>
      { label && <Form.Label>{ label }</Form.Label> }
      <Form.Control
        name={name}
        type={type}
        className={className || ''}
        value={value}
        onChange={onChange}
        {...dynamicProps}
      />
    </Form.Group>
  )
}

export default InputField;