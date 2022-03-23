import Head from 'next/head'
import Login from '../components/Login'
import Signup from '../components/Signup'
import UserLoggIn from '../components/UserLoggIn'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
    <Head>
       <title>MavAuth</title>
    </Head>
    <div className = "flex flex-col justify-center items-center">
       <Signup/>
       <Login/>
       <UserLoggIn/>
    </div>
  </div>
  )
}
