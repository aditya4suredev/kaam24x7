import connectDb from '../../utils/connectDB';

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const db = await connectDb();
      // Assuming the 'categories' collection exists in your MongoDB database
      const categories = await db.collection('categories').find({}).toArray();
      res.status(200).json(categories);
      console.log(categories);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
