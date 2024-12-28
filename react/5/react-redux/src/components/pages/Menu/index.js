import React from 'react'
import { Link, Routes, Route } from 'react-router-dom';
import "./index.css"

export default function Menu() {
    return (
        <ul className="menu">
            <li><Link to="/">welcome</Link></li>
            <li><Link to="/movies">查询电影</Link></li>
            <li><Link to="/2">2</Link></li>
        </ul>
    )
}

