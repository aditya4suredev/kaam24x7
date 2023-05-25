import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";

function checkout() {
  const router = useRouter();
 

  return (
    <div className="relative h-[200vh] bg-[#F2ECE6]">
       <Head>
        <title>Bookings- Kaam 24x7</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header/>
      <main>
        <div>
          <h1 className="my-4 text-3xl font-semibold lg:text-4xl  font-coffee">
            "Review your Bookings": "No bookings here!"
          </h1>
          <p>Kaam 24x7 - Exclusive Offers</p>
          
            <Button title="Explore Services to Book!" onClick={()=> router.push('/')} 
            />
   
        </div>

          <div>
             
          </div>
 
      </main>
    </div>
  )
}

export default checkout
