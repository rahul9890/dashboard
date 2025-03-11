import React from 'react'

export default function Register() {
  return (
    <>
      <h2>Register</h2>
      <form>
        Fullname:
        <input type="text" />
        <br />
        Email:
        <input type="email" />
        <br />
        Password:
        <input type="password" name="password" id="password" />
        <br />
        Confirm Password:
        <input type="password" name="confirmPassword" id="confirmPassword" />
        <br />
        <input type="submit" value="Register" />
      </form>
    </>
  );
}
