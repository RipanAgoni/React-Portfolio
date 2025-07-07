import React from 'react'
import FirstContent from './Component/firstContent.jsx'
import Particles from './Component/particels.jsx'
import SecondContent from './Component/secondContent.jsx'
import Footer from './Component/footer.jsx'

const App = () => {
  return (
    <div className="w-full m-auto h-screen text-white flex flex-col justify-between relative min-h-screen">

      <Particles />

      <div className="relative "> {/* Container for foreground content */}


        <FirstContent />


      </div>

      <SecondContent />

      <Footer />

    </div>
  )
}

export default App
