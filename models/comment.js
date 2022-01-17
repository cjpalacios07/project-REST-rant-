const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, required: true },
    content: { type: String, default: '' }
})

<<<<<<< HEAD
module.exports = mongoose.model('Comment', commentSchema)

=======
module.exports = mongoose.model('Comment', commentSchema)
>>>>>>> 8fe84074a363ab07fd7318383552aef2ed336f2d
