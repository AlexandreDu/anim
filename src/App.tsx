import { motion } from "framer-motion"
import styled from 'styled-components'

import { Layout } from "./components/layout"
import { Home } from "./pages"

import { Routes, Route } from 'react-router-dom'

const Button = styled(motion.button)`
  color: white;
  font-weight: bold;
  background-color: purple;
  padding: 1rem;
  border-radius: 2px;
  border: none;
  cursor: pointer;
`

const App: React.FC = () => {


  return (
    <>
      <Layout>
        <Routes>
          <Route path={'/'} element={<Home />}/>
        </Routes>
      </Layout>
    </>
  )
}

export default App

// screens: {
//   'sm': '640px',
//   // => @media (min-width: 640px) { ... }

//   'md': '768px',
//   // => @media (min-width: 768px) { ... }

//   'lg': '1024px',
//   // => @media (min-width: 1024px) { ... }

//   'xl': '1280px',
//   // => @media (min-width: 1280px) { ... }

//   '2xl': '1536px',
//   // => @media (min-width: 1536px) { ... }
// }
