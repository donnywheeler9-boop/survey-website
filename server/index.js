
const express = require('express');
const app = express();
const port = 3001;

// Body parser middleware
app.use(express.json());

// Home Route
app.get('/', (req, res) => {
    res.send('Welcome to the Survey API!');
});

// Dummy route for surveys
app.get('/surveys', (req, res) => {
    res.json({ message: 'Survey Wall (iFrame integration)' });
});

// Dummy authentication (JWT token verification example)
app.post('/login', (req, res) => {
    const { email, password } = req.body;
    // Normally validate and issue a JWT token
    res.json({ message: 'Login successful!', token: 'dummy_token' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
