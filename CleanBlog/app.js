const express = require('express');
const app = express();
const port = 3000;
const blog= { id: 1, title: "Blog title", description: "Blog description" };

app.get('/', (req, res) => {
    res.status(200).send(blog);
    res.end();
});
app.listen(port, () => {
  console.log('Server is running on port '+port);
});