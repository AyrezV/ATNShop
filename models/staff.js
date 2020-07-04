const mongoose = require('mongoose');

var staffSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    MSNV: String,
    Name: String,
    urlImg: String,
    Information: String    
} , { collection: 'Staffs' } );

var Staff = mongoose.model('Staffs', staffSchema);

module.exports = Staff;