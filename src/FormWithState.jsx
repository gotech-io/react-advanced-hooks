import { useState, useEffect } from 'react';

const onSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const formJson = Object.fromEntries(formData);
  console.log(formJson);
};

const FormWithState = () => {
  const [disabled, setDisabled] = useState(true);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  useEffect(() => {
    setDisabled(
      !firstName || firstName.length < 2 || !lastName || lastName.length < 2
    );
  }, [firstName, lastName]);

  return (
    <form onSubmit={onSubmit}>
      <label style={{ display: 'block' }}>
        First Name *
        <input
          name="firstName"
          type="text"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
        />
      </label>
      <label style={{ display: 'block' }}>
        Last Name *
        <input
          name="lastName"
          type="text"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
        />
      </label>
      <button type="submit" disabled={disabled}>
        Submit
      </button>
    </form>
  );
};

export default FormWithState;
