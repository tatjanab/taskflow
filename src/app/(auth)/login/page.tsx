function Login() {
  return (
    <div>
      <form>
        <div className='input-row'>
          <label htmlFor='email'>Email address</label>
          <input name='email' type='email' />
        </div>
        <div className='input-row'>
          <label htmlFor='password'>Password</label>
          <input name='password' type='password' />
        </div>
        <button type='submit'>Log in</button>
      </form>
    </div>
  )
}

export default Login
