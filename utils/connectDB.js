import mongoose from 'mongoose';

const connectDb = async () => {
  try {
    // Add your MongoDB connection URI here
    const MONGODB_URI = 'mongodb+srv://aditya4sure:RiseAbove@dev24x7.ioo4w.mongodb.net/test?retryWrites=true&w=majority';

    await mongoose.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    process.exit(1); // Exit the process with an error
  }
};

export default connectDb;
