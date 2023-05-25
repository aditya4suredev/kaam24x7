import { connectToDatabase } from '../../../../utils/connectDB';

export default async function handler(req, res) {
  const { categoryId } = req.query;

  if (req.method === 'GET') {
    try {
      const db = await connectToDatabase();
      const subcategories = await db
        .collection('subcategories')
        .find({ categoryId })
        .toArray();
      res.status(200).json(subcategories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
