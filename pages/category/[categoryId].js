import axios from 'axios';
import { useRouter } from 'next/router';
import Header from '../../components/Header'
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategoryNameById } from '../../pages/api/getCategories'; 

const CategoryPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [subcategories, setSubcategories] = useState([]);
  const [categoryName, setCategoryName] = useState('');

  useEffect(() => {
    const fetchSubcategories = async () => {
      try {
        const response = await axios.get(`/api/getSubCategories?categoryId=${categoryId}`);
        setSubcategories(response.data.data);
      } catch (error) {
        console.error(error);
      }
    };
    const fetchCategoryName = async () => {
      try {
        const response = await axios.get(`/api/getCategoriesById?categoryId=${categoryId}`);
        setCategoryName(response.data.data.name);
      } catch (error) {
        console.error(error);
      }
    };

    if (categoryId) {
      fetchSubcategories();
      fetchCategoryName();
    }

    if (categoryId) {
      fetchSubcategories();
    }
  }, [categoryId]);

  if (!categoryId) {
    return <div>Loading...</div>;
  }

  return (
    <div>
    <Header/>
    <div className="container mx-auto p-4">
      <nav className="text-sm mb-4">
        <ol className="list-none font-coffee p-0 inline-flex">
          <li className="flex   items-center">
            <Link href="/">
              <a className="text-black hover:text-[#5E474C]">Home</a>
            </Link>
            <svg className="w-4 h-4 mx-2 fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M8.707 14.707a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0 0-1.414l-4-4a1 1 0 0 0-1.414 1.414L11.586 9H3a1 1 0 1 0 0 2h8.586l-2.293 2.293a1 1 0 0 0 0 1.414z"
              />
            </svg>
          </li>
          <li className="flex items-center">
            <span className="text-gray-500">{categoryName}</span>
          </li>
        </ol>
      </nav>

      <h1 className="text-2xl font-bold mb-4">Category: {categoryName}</h1>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map((subcategory) => (
          <Link key={subcategory._id} href={`/subcategory/${subcategory._id}`}>
            <a className="block rounded-lg overflow-hidden border border-gray-300 hover:border-gray-400 hover:shadow-md">
              <img src={subcategory.image} alt={subcategory.name} className="object-cover h-48 w-full" />
              <div className="p-4">
                <h2 className="text-lg font-semibold mb-2">{subcategory.name}</h2>
                <p className="text-gray-600">{subcategory.description}</p>
              </div>
            </a>
          </Link>
        ))}
      </div>
      </div>
      </div>
  );
};

export default CategoryPage;
