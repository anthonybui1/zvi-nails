import React from 'react'
import Header from './organisms/Header';
import Hero from './organisms/Hero';
import Gallery from './organisms/Gallery';

const App = () => {
  return (
    <div className="font-body text-md">
      <Header />
      <Hero />
      <Gallery />
    </div>
  )
}

export default App
