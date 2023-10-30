const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const methodOverride=require('method-override');

const postcontroller = require('./controllers/postController');
const pageController = require('./controllers/pageController');
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(methodOverride('_method',{methods:['POST','GET']}))

app.set("view engine", "ejs");
mongoose.connect('mongodb://localhost:27017/cleanblog_db')

app.get('/', postcontroller.getAllPosts);
app.get("/posts/:id",postcontroller.getPhoto );
app.post('/posts',postcontroller.addPost);
app.put('/posts/:id',postcontroller.updatePost);
app.delete('/posts/:id',postcontroller.deletePost)

app.get("/posts/edit/:id",pageController.getEditPage);
app.get('/about', pageController.getAboutPage);
app.get('/add_post', pageController.getAddPhotoPage);


app.listen(port, () => {
  console.log('Server is running on port '+port);
});