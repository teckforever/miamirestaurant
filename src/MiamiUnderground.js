import React from 'react'
import { Header } from './components/Header'
import { MeatSection } from './components/MeatSection'
import { SaladSection } from './components/SaladSection'
import { DrinksSection } from './components/DrinksSection'

export const MiamiUnderground = () => {
  return (
    <div className="container-app">
      <Header />
      <MeatSection />
      <SaladSection />
      <DrinksSection />
    </div>
  )
}
