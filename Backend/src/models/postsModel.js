const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/blogone?retryWrites=true&w=majority')

const postSchema = new mongoose.Schema({
    Title: String,
    Author: String,
    Content: String,
    Category: String,
    UserId: String,
    Date: String
})
const posts = mongoose.model('posts', postSchema)

module.exports = posts