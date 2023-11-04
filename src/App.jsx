import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <>
      <body className='bg-blue-100 flex items-center justify-center h-screen m-0'>
        <div className='bg-white p-4 flex flex-col items-center justify-center w-80 rounded-3xl'>
          <img src="src/assets/image-qr-code.png" alt="qr-code"height={300} width={300}  className='rounded-xl'/>
          <h1 className='font-bold text-center mt-5 text-lg'>Imporove your front-end skills by building projects</h1>
          <p className='text-center mt-5 font-normal'>Scan the QR code to visit Frontend Mentor and take your skills to the next level.</p>
        </div>
      </body>
    </>
  )
}

export default App
