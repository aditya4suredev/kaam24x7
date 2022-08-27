import { ShoppingCartIcon } from "@heroicons/react/outline";
import Image from "next/image";
import React from "react";
import { urlFor } from "../sanity";

interface Props {
    product: Product;
}
function Product({ product }: Props) {
    return (
        <div className="flex h-fit w-[320px] select-none flex-col space-y-3 rounded-xl bg-[#1E1F1F] p-8 md:h-[500px] md:w-[400px] md:p-10">
            <div className="relative h-64 w-full md:h-72">
                <img src={urlFor(product.image[0]).url()}   />
            </div>
            <div className="flex flex-1 items-center justify-between space-x-3">
                <div className="space-y-2 text-xl  md:text-2xl">
                    <p className="border-b-2 border-gray-800 text-[#E5A763]">{product.title}</p>
                    <p className="border-b-2 font-darkage border-gray-800 text-[#ffffff]">Rs.{product.price}</p>
                </div>

                <div className="flex h-16 flex-shrink-0 cursor-pointer items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-[#3EE0C4] md:h-[70px] md: w-[70px]">
                    <ShoppingCartIcon className="h-8 w-8 text-white"/>
                </div>
            </div>



        </div>

    )
}

export default Product;
