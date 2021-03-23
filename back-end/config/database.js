const mongoose = require('mongoose')
mongoose.connect("mongodb://localhost:27017/database",
{ useNewUrlParser: true, useUnifiedTopology: true }, (err)=>{
    if(err)
     {
        console.log('connexion failed',err)
    }
    else 
    { 
        console.log('connexion etablie')
    }
});
mongoose.Promise = global.Promise;
module.exports = mongoose;