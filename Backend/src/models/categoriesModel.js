const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/blogone?retryWrites=true&w=majority')

const categorySchema = new mongoose.Schema({
    Name: String,
})
const categories = mongoose.model('category', categorySchema)

module.exports = categories