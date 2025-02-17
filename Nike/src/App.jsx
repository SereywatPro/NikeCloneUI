import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './components/Head'
import MainShow from './components/MainShow'

function App() {
  
  return (
    <>
      <section className='bg-background-dark
        min-h-screen box-border m-0 p-0 '>
        <Head />
        <MainShow/>
      </section>
    </>
  )
}

export default App
