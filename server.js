require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const MONGO_URI = "mongodb+srv://tanmayarora118:209M4DYpLasSnDGZ@cluster0.ek92g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB without deprecated options
mongoose.connect(process.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/patients', require('./routes/patients'));
app.use('/api/authorizations', require('./routes/authorizations'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
