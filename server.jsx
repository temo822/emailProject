// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const bodyParser = require('body-parser');

// const app = express();
// const PORT = process.env.PORT || 5000;


// app.use(cors());
// app.use(express.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// mongoose.connect('mongodb://localhost:27017/mydatabase', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const User = mongoose.model('User', {
//   username: String,
//   password: String,
// });

// app.post('/register', async (req, res) => {
//   try {
//     const hashedPassword = await bcrypt.hash(req.body.password, 10);
//     const user = new User({
//       username: req.body.username,
//       password: hashedPassword,
//     });
//     await user.save();
//     res.status(201).send('User created successfully');
//   } catch {
//     res.status(500).send('Error creating user');
//   }
// });

// app.post('/login', async (req, res) => {
//   const user = await User.findOne({ username: req.body.username });
//   if (user) {
//     const validPassword = await bcrypt.compare(req.body.password, user.password);
//     if (validPassword) {
//       const accessToken = jwt.sign({ username: user.username }, 'secret');
//       res.json({ accessToken: accessToken });
//     } else {
//       res.status(400).send('Invalid password');
//     }
//   } else {
//     res.status(400).send('User not found');
//   }
// });

// app.get('/data', (req, res) => {
//   res.json({ message: 'Protected data' });
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());


mongoose.connect('mongodb://localhost:27017/your_database_name', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
