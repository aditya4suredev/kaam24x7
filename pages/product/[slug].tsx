import { GetStaticProps } from "next";
import { SanityClient } from "next-sanity";
import Header from "../../components/Header";
import { sanityClient, urlFor } from '../../sanity';
import { ShoppingCartIcon } from "@heroicons/react/solid";
import { LightningBoltIcon } from "@heroicons/react/solid";
import Image from "next/image";
import PortableText from "react-portable-text";
import { useDispatch } from "react-redux";
import { addToBasket } from "../../redux/basketSlice";
import toast from "react-hot-toast";

interface Props {
  product: Product;
}

function Product({ product }: Props) {
  const dispatch = useDispatch()
  const addItemToBasket = () =>{
    dispatch(addToBasket(product));
    toast.success(`${product.title} added to Bookings!`,{
        position : 'bottom-center',
    });
};

 
  return (
    <main>
      <Header />
      <div className="heightFix px-6 lg:py-32 md:py-28 py-12 pb-20">
        <div className="max-w-screen-xl flex items-center mx-auto">
          <div className="flex md:flex-row flex-col md:justify-between w-full md:gap-4 gap-8">
            <div className="mx-auto">
              <Image
                src={urlFor(product.image[0]).url()!}
                alt=""
                width={400}
                height={400}
                objectFit="contain"
              />
            </div>

            <div className="flex-grow xl:max-w-2xl lg:max-w-xl  md:max-w-md">
              <h1 className="font-bold xl:text-4xl  lg:text-3xl text-2xl mb-2 capitalize">
                {product.title}
              </h1>
              <h1 className="text-2xl font-semibold text-gray-700">
                Rs. {product.price}
              </h1>

              <div>
                <PortableText dataset={process.env.NEXT_PUBLIC_SANITY_DATASET!}
                  projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!} content={product.description} 
                  serializers={{
                    h1: (props:any) =>(
                      <h1 className="text-2xl font-bold my-5" {...props} />
                    ),
                    h2: (props:any) =>(
                      <h1 className="text-xl font-bold my-5" {...props} />
                    ),
                    li:({children}:any) =>(
                      <li className="ml-4 list-disc">{children}</li>
                    ),
                    link:({ href, children }: any)=>(
                      <a href={href} className='text-blue-500 hover:underline'>{children}</a>
                    ),
                  }
                 }
                  />
              </div>

              
              <div className="mt-10 flex xs:flex-row flex-col sm:gap-8 gap-6">
                <a onClick={addItemToBasket}
                  className="button cursor-pointer px-10  py-2 flex items-center justify-center">
                  <ShoppingCartIcon className="w-4" />
                  <span className="ml-2">Add to Cart</span>
                </a>
                <a
                  className=" button-green px-10   py-2 flex items-center justify-center"

                >
                  <LightningBoltIcon className="w-4" />
                  <span className="ml-2">Buy Now</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>




    </main>
  )
}

export default Product;


export const getStaticPaths = async () => {
  const query = `*[_type =="product"]{
        _id,
        slug{
        current
      },
      title,
      description,
      price
        
      }`;
  const products = await sanityClient.fetch(query);

  const paths = products.map((product: Product) => ({
    params: {
      slug: product.slug.current
    }
  }));
  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const query = `*[_type =="product" && slug.current == $slug][0]{
    _id,
    _createdAt,
    title,
    image,
    description,
    price,
    slug
  }`
  const product = await sanityClient.fetch(query, {
    slug: params?.slug,
  });
  if (!product) {
    return {
      notFound: true
    }
  }
  return {
    props: {
      product,
    },
    revalidate: 60, //after 60 seconds, update the old cached version!
  }
}