import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../components/Button";
import CheckoutProduct from "../components/CheckoutProduct";
import Header from "../components/Header";
import { selectBasketItems } from "../redux/basketSlice";

function checkout() {
  const items = useSelector(selectBasketItems);
  const router = useRouter();
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState(
    {} as { [key: string]: Product[] }
  );
  useEffect(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item._id] = results[item._id] || []).push(item);
      return results;
    }, {} as { [key: string]: Product[] });

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

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
            {items.length > 0 ? "Review your Bookings": "No bookings here!"}
          </h1>
          <p>Kaam 24x7 - Exclusive Offers</p>
          {items.length === 0 && (
            <Button title="Explore Services to Book!" onClick={()=> router.push('/')} 
            />
          )}
        </div>
        {items.length > 0 && (
          <div>
              {Object.entries(groupedItemsInBasket).map(([key, items])=>(
                <CheckoutProduct key={key} items={items} id={key} />
              ))}
          </div>
        )}
      </main>
    </div>
  )
}

export default checkout
