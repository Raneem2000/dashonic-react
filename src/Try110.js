import { useState } from 'react';
import './App.css';

function App() {

  const [form , setForm] = useState({
    email : '',
    password: '',
    passwordConfirm: '',
    message: ''
  })

  function handleFormChange (e){
    setForm({...form , [e.target.name] : e.target.value})
  }

  return (
    <div className='container'>
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
        <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"
        name='email'
        value={form.email}
        onChange={handleFormChange} />
      </div>
      <div className="mb-3">
        <label htmlFor="pass" className="form-label">Password </label>
        <input type="password" className="form-control" id="pass" placeholder="Password..."
        name='password'
        value={form.password}
        onChange={handleFormChange}  />
      </div>
      <div className="mb-3">
        <label htmlFor="passConfirm" className="form-label">Password confirmation</label>
        <input type="password" className="form-control" id="passConfirm" placeholder="password confirmation"
        name='passwordConfirm'
        value={form.passwordConfirm}
        onChange={handleFormChange}  />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows={3} 
        name='message'
        value={form.message}
        onChange={handleFormChange}  />
      </div>
    </div>
  );
}

export default App;
