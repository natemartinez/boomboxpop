import express from 'express';
const app = express();
var cors = require('cors');
app.use(cors());

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
