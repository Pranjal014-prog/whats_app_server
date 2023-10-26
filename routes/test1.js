import express from 'express';
import TestSchema from '../models/test.js';// Import your MongoDB model

const Test1 = express.Router();

// Route to insert values into the database
Test1.post('/insert', async (req, res) => {
  try {
    // Create a new instance of the TestSchema model with the data from the request body
    const testInstance = new TestSchema({
      name: req.body.name,
      email: req.body.email,
    });

    // Save the instance to the database
    const savedData = await testInstance.save();

    return res.status(200).json({ message: 'Data inserted successfully', savedData });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Server error' });
  }
});

export default Test1;
