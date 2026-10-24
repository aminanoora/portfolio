import Header from './components/Header.tsx'
import Hero from './components/Hero.tsx'
import Ticker from './components/Ticker.tsx'
import SelectedWorks from './components/SelectedWorks.tsx'
import Services from './components/Services.tsx'
import Contact from './components/Contact.tsx'

function App() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 bg-surface min-h-screen">
        <div className="flex flex-col w-full relative">
          <div className="w-full px-margin-mobile md:px-margin pt-space-xl pb-space-2xl flex flex-col gap-space-2xl max-w-7xl mx-auto">
            <Hero />
            <Ticker />
            <SelectedWorks />
            <Services />
            <Contact />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
