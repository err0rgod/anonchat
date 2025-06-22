import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ChatDashboard from './pages/ChatDashboard'
import Login from './pages/Login'
import Register from './pages/Register'

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-chat-background">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<ChatDashboard />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App