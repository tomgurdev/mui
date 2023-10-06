const express = require('express');
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 443;

// Load the SSL certificate and private key files
const privateKey = fs.readFileSync('./key.pem', 'utf8');
const certificate = fs.readFileSync('./chain.pem', 'utf8');
const credentials = { key: privateKey, cert: certificate };


// Serve static files from the 'build' directory
app.use(express.static(path.join(__dirname, './build')));

// Handle any other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './build', 'index.html'));
});
// Create an HTTPS server using your Express app and SSL credentials
const httpsServer = https.createServer(credentials, app);

httpsServer.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});