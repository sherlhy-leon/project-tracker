import express from 'express';
import { getProjects } from './src/controllers/projects.controller';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// Define a simple route
app.get('/projects', getProjects);
app.get('/', (req, res) => res.send("Alive!"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;