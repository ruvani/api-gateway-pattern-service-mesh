const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/service1', async (req, res) => {
  try {
    const response = await axios.get('http://service1.default.svc.cluster.local');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/service2', async (req, res) => {
  try {
    const response = await axios.get('http://service2.default.svc.cluster.local');
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`API Gateway listening at http://localhost:${port}`);
});
