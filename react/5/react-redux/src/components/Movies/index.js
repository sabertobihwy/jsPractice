import React, { useEffect } from 'react';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import ConditionWrapper from './ConditionWrapper'
import TableWrapper from './TableWrapper'

export default function Movies() {
  return (
    <>
      <ConditionWrapper />
      <TableWrapper />
    </>
  )
}
