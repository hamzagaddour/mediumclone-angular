const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://"+process.env.DB_USER_PASS+"@cluster0.3d6er.mongodb.net/mediumclone-angular?retryWrites=true&w=majority"
).then(()=> console.log('Connected to database with success'))
.catch(()=> console.log('failed Connect to database'))
