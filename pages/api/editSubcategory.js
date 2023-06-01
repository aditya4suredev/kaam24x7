// pages/api/editSubcategory.js
import connectDb from '../../utils/connectDB';
import SubCategory from '../../models/SubCategory';

connectDb();

export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case 'PUT':
      try {
        const { subcategoryId } = req.body;
        const updatedSubcategory = await SubCategory.findByIdAndUpdate(
          subcategoryId,
          req.body,
          { new: true, runValidators: true }
        );
        res.status(200).json(updatedSubcategory);
      } catch (error) {
        res.status(400).json({ error: 'Failed to update subcategory' });
      }
      break;

    default:
      res.status(400).json({ error: 'Invalid request method' });
  }
}
