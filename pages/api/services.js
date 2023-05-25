import nextConnect from 'next-connect';
import Service from '../../path/to/Service';
import db from '../../utils/connectDB';

const handler = nextConnect();

handler.use(db.connect);

handler.post(async (req, res) => {
  try {
    const { subcategory, name, image } = req.body;
    const service = new Service({ subcategory, name, image });
    await service.save();
    res.status(201).json({ success: true, data: service });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

handler.get(async (req, res) => {
  try {
    const services = await Service.find().populate('subcategory');
    res.status(200).json({ success: true, data: services });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

export default handler;
