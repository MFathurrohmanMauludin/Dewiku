/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const express = require('express');
const admin = require('firebase-admin');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const moment = require('moment');
const cors = require('cors');

const app = express();
const port = process.env.PORT;
app.use(cors());

// Initialize Firebase Admin SDK
const serviceAccount = require('./my-portfolio-c2c6d-firebase-adminsdk-zwr4f-a6d10c8e57.json');
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://my-portfolio-c2c6d-default-rtdb.firebaseio.com',
});

// Firebase Realtime Database reference
const db = admin.database();
const companiesRef = db.ref('companies');
const portfoliosRef = db.ref('portfolios');
const blogsRef = db.ref('blogs');
const skillsRef = db.ref('skills');
const tokensRef = db.ref('tokens');
const secretKey = process.env.SECRET_KEY;

app.use(bodyParser.json());

const options = {
    expiresIn: '1d', // Token will expire in 1 day
};

// Create a new token
app.post('/tokens', (req, res) => {
    const { username, password } = req.query; // Assuming the request body includes userId and username

    // Update the payload with the provided userId and username
    const newPayload = {
        username,
        password
    };

    // Generate a new token with the updated payload
    const newToken = jwt.sign(newPayload, secretKey, options);

    // Save the new token in the database (Firebase Realtime Database)
    const newTokenRef = tokensRef.push();

    if (username === 'hatsunemiku39' & password === 'iloveit') {
        newTokenRef.set({
            token: newToken,
            createdAt: moment().format('DD/MM/YYYY')
        });

        res.status(201).json({
            id: newTokenRef.key,
            token: newToken,
            createdAt: moment().format('DD/MM/YYYY')
        });
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
});


// Get token
app.get('/tokens', (req, res) => {
    const username = req.query.user;
    const password = req.query.pass;

    if (username === 'hatsunemiku39' & password === 'kawaiidesu') {
        tokensRef.once('value', (snapshot) => {
            const tokens = snapshot.val();
            res.status(200).json(tokens);
        });
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
});


// Middleware to verify JWT
const verifyToken = (req, res, next) => {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).json({ message: 'No token provided.' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Failed to authenticate token.' });
        }

        req.userId = decoded.id;
        next();
    });
};

// Example of generating a JWT without a database
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Hardcoded username and password for demonstration purposes
    const hardcodedUsername = process.env.USERNAME;
    const hardcodedPassword = process.env.PASSWORD;

    if (!hardcodedUsername || !hardcodedPassword) {
        return res.status(500).json({ message: 'Internal server error. Missing credentials.' });
    }

    if (username === hardcodedUsername && password === hardcodedPassword) {
        // If authentication is successful, generate a JWT
        const token = jwt.sign({ id: username }, secretKey, {
            expiresIn: '30d', // expires in 30 days
        });

        res.status(200).json({ token });
    } else {
        res.status(401).json({ message: 'Invalid username or password.' });
    }
});

// Protected routes (require authentication)
app.use(verifyToken);

// Create a new company
app.post('/companies', (req, res) => {
    const newCompany = req.body;
    const newCompanyRef = companiesRef.push();
    newCompanyRef.set(newCompany);

    res.status(201).json({
        id: newCompanyRef.key,
        ...newCompany,
    });
});

// create a new portfolio
app.post('/portfolios', (req, res) => {
    const newPortfolios = req.body;
    const newPortfoliosRef = portfoliosRef.push();
    newPortfoliosRef.set(newPortfolios);

    res.status(201).json({
        id: newPortfoliosRef.key,
        ...newPortfolios,
    });
});

// create a new blog
app.post('/blogs', (req, res) => {
    const newBlog = req.body;
    const newBlogRef = blogsRef.push();
    newBlogRef.set(newBlog);

    res.status(201).json({
        id: newBlogRef.key,
        ...newBlog,
    });
});

// create a new skill
app.post('/skills', (req, res) => {
    const newSkills = req.body;
    const newSkillsRef = skillsRef.push();
    newSkillsRef.set(newSkills);

    res.status(201).json({
        id: newSkillsRef.key,
        ...newSkills,
    });
});

// Get all companies
app.get('/companies', (req, res) => {
    companiesRef.once('value', (snapshot) => {
        const companies = snapshot.val();
        res.status(200).json(companies);
    });
});

// Get all skills
app.get('/skills', (req, res) => {
    skillsRef.once('value', (snapshot) => {
        const skills = snapshot.val();
        res.status(200).json(skills);
    });
});

// Get all portfolios
app.get('/portfolios', (req, res) => {
    portfoliosRef.once('value', (snapshot) => {
        const portfolios = snapshot.val();
        res.status(200).json(portfolios);
    });
});

// Get all blogs
app.get('/blogs', (req, res) => {
    blogsRef.once('value', (snapshot) => {
        const blogs = snapshot.val();
        res.status(200).json(blogs);
    });
});

// Update a portfolios
app.put('/portfolios/:id', (req, res) => {
    const portfolioId = req.params.id;
    const updatedPortfolio = req.body;

    portfoliosRef.child(portfolioId).update(updatedPortfolio);

    res.status(200).json({
        id: portfolioId,
        ...updatedPortfolio,
    });
});

app.put('/blogs/:id', (req, res) => {
    const blogId = req.params.id;
    const updatedBlog = req.body;

    blogsRef.child(blogId).update(updatedBlog);

    res.status(200).json({
        id: blogId,
        ...updatedBlog,
    });
});

// Update a company
app.put('/companies/:id', (req, res) => {
    const companyId = req.params.id;
    const updatedCompany = req.body;

    companiesRef.child(companyId).update(updatedCompany);

    res.status(200).json({
        id: companyId,
        ...updatedCompany,
    });
});

// Delete a company
app.delete('/companies/:id', (req, res) => {
    const companyId = req.params.id;

    companiesRef.child(companyId).remove();

    res.status(204).send();
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
