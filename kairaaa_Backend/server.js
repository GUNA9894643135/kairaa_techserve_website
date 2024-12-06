const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const Contact = require('./models/Contact');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/KairaaDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error('MongoDB connection error:', err));



app.post('/api/contact', async (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const newContact = new Contact({ name, email, message });
    await newContact.save();
    res.status(200).json({ message: 'Contact details saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save contact details' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
