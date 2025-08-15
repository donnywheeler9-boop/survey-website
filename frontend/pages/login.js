
import { useState } from 'react'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Login successful!')
  }

  return (
    <div className="text-center">
      <h1 className="text-3xl font-semibold mb-4">Login to Your Account</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="p-3 mb-4"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="p-3 mb-4"
        />
        <button type="submit" className="bg-green-600 text-white p-3 rounded">Login</button>
      </form>
    </div>
  )
}
