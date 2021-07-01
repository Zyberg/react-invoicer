import { useState } from 'react';
import Select from 'react-dropdown-select';
import { Form } from 'react-bootstrap';
import useGetCountries from '@/hooks/useGetCountries';

function CountryField({ label, name, onChange }) {
  const options = useGetCountries();
  const [optionsSelected, setOptionsSelected] = useState([]);

  const handleChange = (values) => {
    onChange({ target: { type: 'select', name, value: values[0].alpha2Code } });

    setOptionsSelected(values);
  };

  return (
    <Form.Group>
      { label && <Form.Label>{ label }</Form.Label> }
      <Select
        name={name}
        options={options}
        onChange={handleChange}
        labelField="name"
        labelValue="alpha2Code"
      />
      { JSON.stringify(optionsSelected, ' ', 2)}
    </Form.Group>
  )
}

export default CountryField;