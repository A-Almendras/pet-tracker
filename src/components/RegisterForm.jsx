import React from 'react'

const RegisterForm = () => {
  return (
    <div>
      <div>RegisterForm</div>
      <form action="">
        <input type="text" name="first_name" id="" placeholder="First Name" />
        <input type="text" name="last_name" id="" placeholder="Last Name" />
        <input type="text" name="email" id="" placeholder="Email" />
        <input type="text" name="username" id="" placeholder="Username" />
        <input type="text" name="password" id="" placeholder="Password" />
        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default RegisterForm
