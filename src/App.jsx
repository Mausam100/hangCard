import React from 'react'
import Card1 from "./Card1"
import Card2 from "./Card2"
import Card3 from "./Card3"
const App = () => {
  return (
    <div className='w-full bg-black lg:flex'>
    <Card1/>
    <Card2/>
    <Card3/>
    </div>
  )
}

export default App