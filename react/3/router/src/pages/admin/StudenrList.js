import React from 'react'
import { Navigate } from 'react-router-dom'

export default function StudenrList() {
  return (
    <div>
      <Navigate to="/classlist" replace />
    </div>
  )
}
