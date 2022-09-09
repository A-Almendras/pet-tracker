import React from 'react'

const RegisterForm = () => {
  // const handleSubmit = async (e) => {
  //   e.preventDefault()
  //   await RegisterUser({
  //     name: formValues.name,
  //     email: formValues.email,
  //     password: formValues.password
  //   })
  //   setFormValues({
  //     name: '',
  //     email: '',
  //     password: '',
  //     confirmPassword: ''
  //   })
  //   navigate('/signin')
  // }

  return (
    <div>
      {/* Each input needs value and onInput */}
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
