// Assuming you have already imported the required dependencies and established the necessary database connection

// Import the required models
const Service = require('../../models/Service');
const SubCategory = require('../../models/SubCategory');

// POST request to add a service
export default async function handler(req, res) {
  try {
    const { name, image, description, subcategoryId } = req.body;

    // Check if the subcategory exists
    const subcategory = await SubCategory.findById(subcategoryId);
    if (!subcategory) {
      return res.status(404).json({ success: false, message: 'Subcategory not found' });
    }

    // Create a new service object
    const service = new Service({
      subcategory: subcategoryId,
      name,
      image,
      description,
    });

    // Save the service to the database
    await service.save();

    res.status(200).json({ success: true, data: service });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
}
