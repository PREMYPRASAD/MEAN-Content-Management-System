const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Premynithin:Manumalu123@cluster0.zocaami.mongodb.net/blogone?retryWrites=true&w=majority')

const userSchema = new mongoose.Schema({
    Name: String,
    Email: String,
    Password: String,
    UserRole: String
})
const users = mongoose.model('user', userSchema)

module.exports = users