import Head from 'next/head'

import Bookings from "../components/Bookings";
import Header from '../components/Header'
import Landing from '../components/Landing'
import CategoriesCards from '../components/CategoriesCards'





interface Props {
  categories: Category[];
  products: Product[];
}

const Home = () => {

  


  return (
    <div>
      <Head>
        <title>Kaam 24x7 - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Bookings />


      <main className='relative h-[200vh] bg-[#F2ECE6]'>
      <div className="overflow-hidden">
                <div className="marquee">
                    <span className='font-coffee text-2xl'>
                        Service Available in <span className='font-bold text-red-600'>Pimpri Chinchwad</span>,<span className='font-bold text-green-600'>   Hinjewadi</span>, <span className='font-bold text-red-600'>   Ravet</span>, <span className='font-bold text-green-600'>  Wakad</span>, <span className='font-bold text-red-600'>   Gahunje</span>,<span className='font-bold text-green-600'>   Aundh</span>, <span className='font-bold text-red-600'>    Sangvi</span>, <span className='font-bold text-green-600'>    Moshi-Chikli</span>, <span className='font-bold text-red-600'>    Nigdi-Pradhikaran</span>
                    </span>
                </div>
            </div>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#32262B]'>
        <div id="services" className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white font-coffee md:text-5xl'>Categories</h1>
        </div>
        <CategoriesCards/>
      </section>
    </div>
  )
}

export default Home;

