import React, { useState } from "react"
import {  Alert } from "react-bootstrap"
import { useAuth } from "../contexts/AuthContext"
import { Link, useHistory } from "react-router-dom"
import Button from '../../Button';
import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

export default function Dashboard() {
  const [error, setError] = useState("")
  const { currentUser, logout } = useAuth()
  const history = useHistory()

  async function handleLogout() {
    setError("")

    try {
      await logout()
      history.push("/login")
    } catch {
      setError("Failed to log out")
    }
  }

  return (
    <>
      <div className="profil">
          <h2>Профиль</h2>
          <div><Avatar size={64} icon={<UserOutlined />} /></div>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <div></div>
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Изменить профиль
          </Link>
          <div></div>
          <div></div>
          <div>
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
          </div>
      
    </>
  )
}