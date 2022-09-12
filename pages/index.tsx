import { Tab } from "@headlessui/react";
import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import Link from "next/link";
import Bookings from "../components/Bookings";
import Header from '../components/Header'
import Landing from '../components/Landing'
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";



interface Props {
  categories: Category[];
  products: Product[];
}

const Home = ({ categories, products }: Props) => {
  console.log(products);

  const showProducts = (category: number) => {
    return   products
      .filter((product) => product.category._ref === categories[category]._id)
      .map((product) => 
          <Product product={product} key={product._id} /> 
      );
    
  };

  return (
    <div>
      <Head>
        <title>Kaam 24x7 - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <Bookings />


      <main className='relative h-[200vh] bg-[#F2ECE6]'>
        <Landing />
      </main>
      <section className='relative z-40 -mt-[100vh] min-h-screen bg-[#32262B]'>
        <div id="services" className='space-y-10 py-16'>
          <h1 className='text-center text-4xl font-medium tracking-wide text-white font-coffee md:text-5xl'>Services</h1>
          <Tab.Group>
            <Tab.List className="flex-wrap flex gap-y-4  justify-center ">

              {categories.map((category, index) => (
                index < 3 && (
                  <Tab
                    key={category._id}
                    id={category._id}
                    className={({ selected }) =>
                      `whitespace-nowrap font-coffee inline-block rounded-t-lg py-3 px-5 text-lg font-bold outline-none md:py-4 md:px-6 md:text-base ${selected
                        ? "borderGradient bg-[#3EE0C4] text-white"
                        : "border-b-2 border-[#35383C] text-[#747474]"
                      }`
                    }
                  >
                    {category.title}
                  </Tab>
                )))}
              <Link href='/category'>
                <Tab className={({ selected }) =>
                  `whitespace-nowrap font-darkage inline-block justify-center rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                    ? "borderGradient bg-[#E5A763] text-[#3EE0C4]"
                    : "border-b-2 border-gray-800 text-[#E5A763]"
                  }`
                }
                >View All</Tab>
              </Link>
            </Tab.List>
            <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
              <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
              <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
    </div>
  )
}

export default Home;

export const getServerSideProps: GetServerSideProps<Props> = async (
  context
) => {
  const categories = await fetchCategories();
  const products = await fetchProducts();

  return {
    props: {
      categories,
      products
    },
  };
};