// server.js

const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Allow cross-origin requests

// NewsAPI endpoint
const API_KEY = process.env.NEWS_API_KEY;
const API_URL = 'https://newsapi.org/v2/top-headlines?country=us';
// `${API_URL}&apiKey=${API_KEY}`

app.get('/api/news', async (req, res) => {
  try {
    const response = await axios.get(`${API_URL}&apiKey=${API_KEY}`);
    res.json(response.data);
  } catch (error) {
    console.error('Error fetching news:', error);
    res.status(500).json({ message: 'Failed to fetch news' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
