import { useRef, useState, useEffect } from 'react';

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formJson = Object.fromEntries(formData);
  console.log(formJson);
};

const FormWithRef = (props) => {
  const [disabled, setDisabled] = useState(true);
  const formState = useRef({
    firstName: '',
    lastName: '',
  });

  const onChange = (e) => {
    formState.current[e.target.name] = e.target.value;
    setDisabled(
      !formState.current.firstName ||
        formState.current.firstName.length < 2 ||
        !formState.current.lastName ||
        formState.current.lastName.length < 2
    );
  };

  return (
    <form onSubmit={onSubmit}>
      <label style={{ display: 'block' }}>
        First Name *
        <input name="firstName" type="text" onChange={onChange} />
      </label>
      <label style={{ display: 'block' }}>
        Last Name *
        <input name="lastName" type="text" onChange={onChange} />
      </label>
      <button type="submit" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default FormWithRef;
