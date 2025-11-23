const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB connected ✔️"))
  .catch(err => console.log(err));

app.get('/', (req, res) => {
  res.send("Hello! Macworld");
});

app.use('/roles', require('./routes/roles'));
app.use('/permission-records', require('./routes/permissionRecord'));
app.use('/role-permission-mapping', require('./routes/rolePermissionMapping'));
app.use('/companies', require('./routes/company'));
app.use('/users', require('./routes/user'));





const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});