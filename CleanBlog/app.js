const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const Post = require('./models/Post');

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.set("view engine", "ejs");
mongoose.connect('mongodb://localhost:27017/cleanblog_db')

app.get('/', async(req, res) => {
    const posts = await Post.find({})
    res.render("index", {posts} )
});
app.get('/about', (req, res) => {
  res.render("about")
});
app.get('/add_post', (req, res) => {
  res.render("add_post")
});
app.post('/posts', async(req, res) => {
  await Post.create(req.body)
 res.redirect("/")
});


app.listen(port, () => {
  console.log('Server is running on port '+port);
});