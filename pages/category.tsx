import { Tab } from "@headlessui/react";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Header from "../components/Header";
import Product from "../components/Product";
import { fetchCategories } from "../utils/fetchCategories";
import { fetchProducts } from "../utils/fetchProducts";

interface Props {
    categories: Category[];
    products: Product[];
}




function category({ categories, products }: Props) {
    const showProducts = (category: number) => {
        return products
            .filter((product) => product.category._ref === categories[category]._id)
            .map((product) => <Product product={product} key={product._id} />);
    };
    return (
        <div>
            <Head>
                <title>Services - Kaam 24x7</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Header />


            <div id="default-carousel" className="relative" data-carousel="static">

    <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
      
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
            <img src="/sofa.png" className="absolute object-contain block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>

        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    
        <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>

    <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    </div>

    <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span className="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span className="sr-only">Next</span>
        </span>
    </button>
</div>
            <Tab.Group>
                <Tab.List className="flex-wrap flex gap-y-4  justify-center ">

                    {categories.map((category) => (
                        <Tab
                            key={category._id}
                            id={category._id}
                            className={({ selected }) =>
                                `whitespace-nowrap inline-block rounded-t-lg py-3 px-5 text-sm font-light outline-none md:py-4 md:px-6 md:text-base ${selected
                                    ? "borderGradient bg-[#E5A763] text-white"
                                    : "border-b-2 border-[#35383C] text-[#747474]"
                                }`
                            }
                        >
                            {category.title}
                        </Tab>
                    ))}
                </Tab.List>
                <Tab.Panels className="mx-auto max-w-fit pt-10 pb-24 sm:px-4">
                    <Tab.Panel className="tabPanel">{showProducts(0)}</Tab.Panel>
                    <Tab.Panel className="tabPanel">{showProducts(1)}</Tab.Panel>
                    <Tab.Panel className="tabPanel">{showProducts(2)}</Tab.Panel>
                    <Tab.Panel className="tabPanel">{showProducts(3)}</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>

        </div>
    )
}

export default category;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
    const categories = await fetchCategories();
    const products = await fetchProducts();
    return {
        props: {
            categories,
            products,
        },
    };
};

