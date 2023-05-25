import React, { useState } from 'react';
import axios from 'axios';

const AddCategoryDialog = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [categoryName, setCategoryName] = useState('');
  const [categoryImage, setCategoryImage] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false); // new state variable
  const [isUploading, setIsUploading] = useState(false); // new state variable

  const openDialog = () => {
    setIsOpen(true);
  };

  const closeDialog = () => {
    setIsOpen(false);
    setCategoryName('');
    setCategoryImage('');
    setIsSubmitted(false);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'x8yy4v2u');
    setIsUploading(true); // Start the uploading state

    axios
      .post('https://api.cloudinary.com/v1_1/kaam-24x7/image/upload', formData)
      .then((response) => {
        setCategoryImage(response.data.secure_url);
        setIsUploading(false); // Stop the uploading state
      })
      .catch((error) => {
        console.log(error);
        setIsUploading(false); // Stop the uploading state
      });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!categoryImage) {
      console.log('Image is not available yet. Please wait.');
      return;
    }

    try {
      setIsSubmitted(true);
      setIsUploading(false);
      await axios.post('/api/addCategories', {
        name: categoryName,
        image: categoryImage,
      });

      console.log('Category added successfully');
      closeDialog();
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  return (
    <div className="relative">
      {isSubmitted ? (
        <h1>✅</h1>
      ) : (
        <>
          {isUploading ? (
            <h1>Loading...</h1>
          ) : (
            <h1>👇</h1>
          )}
        </>
      )}

      <button
        className="bg-[#5E474C] hover:bg-[#F6F4EE] hover:text-[#5E474C] text-white font-darkage font-semibold py-2 px-4 rounded"
        onClick={openDialog}
      >
        Add a Category
      </button>

      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-[#5E474C] text-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-bold font-coffee mb-4">Add a Category</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="categoryName" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Category Name
                </label>
                <input
                  type="text"
                  id="categoryName"
                  value={categoryName}
                  onChange={(e) => setCategoryName(e.target.value)}
                  className="w-full font-darkage border border-gray-300 rounded px-3 py-2 focus:outline-none bg-[#F6F4EE] text-[#5E474C] focus:border-[#F6F4EE]"
                  placeholder="Enter category name"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="categoryImage" className="block text-[#F6F4EE] font-bold font-darkage mb-2">
                  Category Image
                </label>
                <input
                  type="file"
                  id="categoryImage"
                  accept="image/*"
                  className="w-full font-darkage"
                  onChange={handleImageUpload}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-[#F6F4EE] font-extrabold font-coffee mr-4"
                  onClick={closeDialog}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-[#F6F4EE] hover:bg-green-200 text-[#5E474C] font-semibold py-2 px-4 rounded font-coffee"
                  disabled={isUploading} // Disable the submit button during uploading
                >
                  {isUploading ? 'Uploading...' : 'Submit'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCategoryDialog;