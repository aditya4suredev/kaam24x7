const mongoose = require('mongoose');

const serviceSchema = new mongoose.Schema({
  subcategory: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subcategory',
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Service = mongoose.model('Service', serviceSchema);

module.exports = Service;
