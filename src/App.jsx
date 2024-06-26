import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root'
import Lenis from '@studio-freight/lenis'
import { useEffect } from 'react'



const router = createBrowserRouter([{ path: '/', element: <RootLayout /> }])

function App() {

  useEffect(() => {
    const lenis = new Lenis()
    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  }, [])
  return <RouterProvider router={router}></RouterProvider>
}

export default App
