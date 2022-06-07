import React, { useRef, useState } from "react"
import { Form, Button, Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"

export default function UpdateProfile() {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const { currentUser, updatePassword, updateEmail } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()

  function handleSubmit(e) {
    e.preventDefault()
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match")
    }

    const promises = []
    setLoading(true)
    setError("")

    if (emailRef.current.value !== currentUser.email) {
      promises.push(updateEmail(emailRef.current.value))
    }
    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    Promise.all(promises)
      .then(() => {
        history.push("/")
      })
      .catch(() => {
        setError("Failed to update account")
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <>
      <div className="profil">
          <h2>Обновить Профиль</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="password">
              <Form.Label>Пароль</Form.Label>
              <Form.Control
                type="password"
                ref={passwordRef}
                placeholder="Введите новый пароль"
                className="login-form"
              />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Подтвердите пароль</Form.Label>
              <Form.Control
                type="password"
                ref={passwordConfirmRef}
                placeholder="Подтвердите пароль"
              />
            </Form.Group>
            <Button disabled={loading} className="w-100" type="submit">
              Обновить
            </Button>
          </Form>
          <div>
        <Link to="/">Отмена</Link>
      </div>
        </div>
      
    </>
  )
}