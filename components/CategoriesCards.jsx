import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const CategoriesCards = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories on page load
    axios.get('/api/categories').then((res) => {
      setCategories(res.data);
      console.log(categories)
    });
  }, []);

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category, index) => (
          <Link key={category._id} href={`/subcategories/${category._id}`}>
            <a className={`relative rounded-lg overflow-hidden cursor-pointer hover:text-white hover:bg-[#3FE0C5] ${index < 5 ? 'bg-[#F6F4EE]' : 'bg-gray-200'}`}>
              <img src={category.image} alt={category.name} className="object-cover h-48 w-full" />
              <div className="p-4">
                <h2 className="text-2xl font-bold text-center font-darkage mb-2">{category.name}</h2>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesCards;
