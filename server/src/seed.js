const axios = require('axios');
const FormData = require('form-data');
const mongoose = require('mongoose');
const { Post } = require('./db');

// Define constants
const NUM_IMAGES = 50;
const PICUM_API_URL = 'https://picsum.photos';
const UPLOAD_IO_API_URL = 'https://upload.io/api/files';
const UPLOAD_IO_API_KEY = 'public_FW25bXfevsckA4KX7sZGLNwr6dby';

// Connect to MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/pinterestlike', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error(err));

// Download and upload images
const uploadImages = async () => {
  const form = new FormData();
  for (let i = 0; i < NUM_IMAGES; i++) {
    const width = Math.floor(Math.random() * 1000) + 500;
    const height = Math.floor(Math.random() * 1000) + 500;
    const response = await axios.get(`${PICUM_API_URL}/${width}/${height}`, { responseType: 'arraybuffer' });
    form.append(`file${i}`, response.data, { filename: `image${i}.jpg` });
  }
  const uploadResponse = await axios.post(UPLOAD_IO_API_URL, form, {
    headers: {
      'Content-Type': `multipart/form-data; boundary=${form._boundary}`,
      'Authorization': `Bearer ${UPLOAD_IO_API_KEY}`
    }
  });
  return uploadResponse.data.files.map(file => file.url);
};

// Seed the database
const seedDatabase = async () => {
  const imageUrls = await uploadImages();
  for (let i = 0; i < NUM_IMAGES; i++) {
    const post = new Post({
      title: `Post ${i + 1}`,
      description: `Description for post ${i + 1}`,
      image: imageUrls[i],
      user: mongoose.Types.ObjectId(),
    });
    await post.save();
  }
  console.log(`Seeded database with ${NUM_IMAGES} posts`);
  mongoose.connection.close();
};

seedDatabase();