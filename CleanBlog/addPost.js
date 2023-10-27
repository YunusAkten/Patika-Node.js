const mongoose=require('mongoose');
const Post=require('./models/Post');

mongoose.connect('mongodb://localhost:27017/cleanblog_db')

Post.create({title:"test title",detail:"test detail"})
Post.create({title:"test title2",detail:"test detail2"})
Post.create({title:"test title3",detail:"test description3"})  