import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function Login() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }

  return (
    <>
      <div className="login__block">
        
          <h2>Вход</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="login-form" id="email">
              
              <Form.Control placeholder="Email" type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group name="Пароль"  className="login-form">
              
              <Form.Control placeholder="Пароль" type="password" ref={passwordRef} required className="login-form" />
            </Form.Group>
            <Button disabled={loading} className="button_login" type="submit">
              Вход
            </Button>
          </Form>
          <div className="w-100 text-center mt-3">
            <Link to="/forgot-password">Забыли пароль?</Link>
          </div>
        
      </div>
      <div>
        Нужен аккаунт? <Link to="/signup">Решастрация</Link>
      </div>
    </>
  )
}