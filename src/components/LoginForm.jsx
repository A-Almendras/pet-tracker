import React from 'react'

const LoginForm = () => {
  return (
    <div>
      {/* Each input needs value and onInput */}
      <div>LoginForm</div>
      <form action="">
        <input type="text" name="username" id="" placeholder="Username" />
        <input type="text" name="password" id="" placeholder="Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  )
}

export default LoginForm
