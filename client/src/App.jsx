import React, { useState } from 'react';
import './App.css';
const url = 'http://localhost:3000/';
function App() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [postStatus, setPostStatus] = useState(
    'Click the button to schedule an appointment'
  );

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      name: name,
      email: email,
      contact: phone,
      date: date,
    };

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        if (response.status == 201) {
          console.log('posted success');
          setPostStatus('form post successful');
          setTimeout(setPostStatus(''), 3000);
        } else {
          console.log('posted failure');
          setPostStatus('form post failed');
          setTimeout(setPostStatus(''), 3000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <form className='form-container' onSubmit={handleSubmit}>
        <div>
          <label htmlFor='name'>Name:</label>
          <input
            type='text'
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            type='tel'
            id='phone'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor='date'>Date:</label>
          <input
            type='date'
            id='date'
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>
      <div className='status'>{postStatus}</div>
    </>
  );
}

export default App;
