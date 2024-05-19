import React, { useState } from 'react';
import "./validatorStyles.css"
const PasswordValidator = () => {
  const [userInp, setUserInp] = useState({
    password: "",
    isMatch: false
  });

  function checkMatch() {
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,}$/;

    const isMatch = regex.test(userInp.password);
    console.log("Matches criteria: ", isMatch);
    setUserInp(prevState => ({
      ...prevState,
      isMatch: isMatch
    }));
  }

  function takeUserInp(e) {
    const password = e.target.value;
    setUserInp(prevState => ({
      ...prevState,
      password: password,
    }));
  }

  return (
    <>
    <main className='content'>
    <h1 id='title'>Password Validator</h1>
      <section className="inp-section">
        <input type="text" className="usr-inp" onChange={takeUserInp} placeholder='password' />
        <button className='check' onClick={checkMatch}>Check</button>
      </section>
        {userInp.isMatch ? <p className='strong-pass'>Strong password</p> : <p className='weak-pass'>weak password</p> }
    </main>
    </>
  );
}

export default PasswordValidator;
