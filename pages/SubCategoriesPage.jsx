import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

const SubcategoriesPage = () => {
  const router = useRouter();
  const { categoryId } = router.query;
  const [subcategories, setSubcategories] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch all categories on page load
    axios.get('/api/categories').then((res) => {
      setCategories(res.data);
    });
  }, []);

  useEffect(() => {
    if (categoryId) {
      // Fetch subcategories for the specified category ID
      axios.get(`/api/categories/${categoryId}/subcategories`).then((res) => {
        setSubcategories(res.data);
      }).catch((error) => {
        console.error(error);
        // Handle error
      });
    }
  }, [categoryId]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Subcategories</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {subcategories.map((subcategory) => (
          <div key={subcategory.id} className="relative rounded-lg overflow-hidden bg-[#F6F4EE]">
            <img src={subcategory.image} alt={subcategory.name} className="object-cover h-48 w-full" />
            <div className="p-4">
              <h2 className="text-2xl font-bold text-center font-darkage mb-2">{subcategory.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubcategoriesPage;
