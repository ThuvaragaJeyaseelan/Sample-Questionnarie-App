const express = require('express');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS for all routes
app.use(cors());

// Endpoint to handle registration POST requests
app.post('/register', (req, res) => {
  const { email, username, password } = req.body;

  // Validate request data (basic validation)
  if (!email || !username || !password) {
    return res.status(400).json({ error: 'Email, username, and password are required' });
  }

  // Example: Save user data to Users.json file
  const newUser = { email, username, password };

  // Read existing users from JSON file
  const usersFilePath = path.join(__dirname, 'Users.json');
  let users = [];
  try {
    const usersData = fs.readFileSync(usersFilePath);
    users = JSON.parse(usersData);
  } catch (error) {
    console.error('Error reading Users.json:', error);
  }

  // Check if user already exists by email (example check)
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return res.status(400).json({ error: 'User with this email already exists' });
  }

  // Add new user
  users.push(newUser);

  // Write updated users array back to Users.json file
  fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), (error) => {
    if (error) {
      console.error('Error writing Users.json:', error);
      return res.status(500).json({ error: 'Failed to register user' });
    }
    console.log('User registered successfully:', newUser);
    res.status(200).json({ message: 'User registered successfully' });
  });
});

// Endpoint to handle login POST requests
app.post('/login', (req, res) => {
  const { username, password } = req.body;

  // Validate request data (basic validation)
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }

  // Read existing users from JSON file
  const usersFilePath = path.join(__dirname, 'Users.json');
  let users = [];
  try {
    const usersData = fs.readFileSync(usersFilePath);
    users = JSON.parse(usersData);
  } catch (error) {
    console.error('Error reading Users.json:', error);
  }

  // Check if user exists and password matches
  const user = users.find(user => user.username === username && user.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }

  // Return success response
  res.status(200).json({ message: 'Login successful' });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
