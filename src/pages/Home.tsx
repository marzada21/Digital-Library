// Home Page Component
// Always shows

import Background from '../assets/bg-image.jpg'

function Home() {
  return (
    <div 
      style={{ backgroundImage: `url(${ Background })`}} 
      className='flex flex-row justify-center mx-auto bg-cover bg-fixed opacity-50'
    >
        <div className='flex place-items-center h-screen'>
          <h3 className='p-7 bg-sky-200 opacity-90 text-zinc-900 rounded font-semibold text-center text-lg'>Welcome to the E-Library <br /> Explore, Discover, Learn</h3>
        </div>
    </div>
  )
}

export default Home
