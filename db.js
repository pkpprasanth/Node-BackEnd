const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost:27017/CrudDB', (err) => {
//     if (!err)
//         console.log('MongoDB connection succeeded.');
//     else
//         console.log('Error in DB connection : ' + JSON.stringify(err, undefined, 2));
// });


mongoose.connect('mongodb+srv://root:Root123@cluster0.ndvxk.mongodb.net/test?retryWrites=true&w=majority')
  .then( ok => console.log("connected to mongodb"))
  .catch(err => console.log("mongodb connection error", err)); 

module.exports = mongoose;