import {Outlet} from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { Analytics } from '@vercel/analytics/react'
function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>
    <Footer/>
    <Analytics mode='production'/>
    </>
  )
}

export default Layout