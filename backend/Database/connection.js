const mongoose = require('mongoose');
const db = 'mongodb+srv://dinesh1804200182:12345@cluster0.a3ndhin.mongodb.net/userdata';
mongoose.connect(db)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });

 