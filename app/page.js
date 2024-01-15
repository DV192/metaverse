import { Footer, Navbar } from '../components';
import { About, Explore, Feedback, GetStarted, Hero, Insights, WhatsNew, World } from '../sections';

export default function Home() {
  return (
    <div className='bg-primary-black overflow-hidden'>
      <div className='h-[100vh] min-h-[100vh] max-h-[100vh] flex flex-col'>
        <Navbar />
        <Hero />
      </div>

      <div className='relative'>
        <About />
        <div className='gradient-03 z-0'></div>
        <Explore />
      </div>

      <div className='relative'>
        <GetStarted />
        <div className='gradient-04 z-0'></div>
        <WhatsNew />
      </div>

      <World />

      <div className='relative'>
        <Insights />
        <div className='gradient-04 z-0'></div>
        <Feedback />
      </div>

      <Footer />
    </div>
  )
}
