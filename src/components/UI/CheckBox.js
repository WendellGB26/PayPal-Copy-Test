import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form } from 'react-bootstrap';

const RadioButton = ({ options, selectedOption, onChange }) => {
  return (
    <Form>
      {options.map(option => (
        <Form.Check
          key={option.key}
          type="radio"
          label={option.value}
          value={option.value}
          checked={selectedOption === option.value}
          onChange={onChange}
          className="form-check-inline"
        />
      ))}
    </Form>
  );
};

export default RadioButton;
