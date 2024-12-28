import React from 'react'
import Layout from '../../components/layout/Layout'
import {Routes,Route} from 'react-router-dom'
import Welcome from '../welcome/index'
import StudenrList from './StudenrList'
import Header from '../../components/header/Header'
import Aside from '../../components/aside/Aside'
import ClassList from './ClassList'

export default function Admin() {
  return (
    <Layout header={<Header/>}
    aside={<Aside/>}
    > 
    
    <Routes>
      <Route path='/' element={<Welcome/>} />
      <Route path='/studentlist' element={<StudenrList/>} />
      {/* <Route path='/classlist' element={<ClassList/>} /> */}
     
    </Routes>
        
    </Layout>
  )
}
