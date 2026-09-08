const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const staticDir = path.join(__dirname, 'dist');
app.use(express.static(staticDir));

app.get('*', (req, res) => {
  res.sendFile(path.join(staticDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`=======================================================`);
  console.log(`🚀 Sprint 8: WPO & Edge PWA running on http://localhost:${PORT}`);
  console.log(`=======================================================`);
});
