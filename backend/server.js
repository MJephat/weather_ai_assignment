const express = require('express');
const cors = require('cors');
require('dotenv').config();
const path = require('path');

const app = express();
app.use(cors());


const cache = new Map();
const CACHE_DURATION = 5 * 60 * 1000; 

const EXTERNAL_BASE_URL = process.env.BASE_URL_ENV; 

// Dynamic route handles any endpoint (e.g., /api/weather)
app.get('/api/:endpoint', async (req, res) => {
  try {
    const { endpoint } = req.params;

    const API_KEY = process.env.WEATHER_API_KEY;
    if (!API_KEY) {
      return res.status(500).json({ error: "API key not configured" });
    }
    const targetUrl = new URL(`${EXTERNAL_BASE_URL}/v1/${endpoint}`);
    targetUrl.search = new URLSearchParams(req.query); 


    const apiRes = await fetch(targetUrl.toString(), {
      headers: { Authorization: `Bearer ${API_KEY}` }
    });

    if (!apiRes.ok) {
      return res.status(apiRes.status).json({ error: `API Status: ${apiRes.status}` });
    }

    const data = await apiRes.json();
    res.json(data);

  } catch (err) {
    console.error("Error:", err.message);
    res.status(500).json({ error: err.message });
  }
});

//deployment
app.use(express.static(path.join(__dirname, 'frontend/dist')));

app.get('/*path', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/dist', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
