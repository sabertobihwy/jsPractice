import React from 'react'
import { Link } from 'react-router-dom'

export default function Aside() {
  return (
    <ul>
      <li><Link to="/studentlist">学生列表</Link></li>
      <li><Link to='/classlist'>班级列表</Link></li>
      <li>3</li>
      <li>4</li>
    </ul>
  )
}
