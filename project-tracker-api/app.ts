import express from 'express';
import { completeProject, createProject, deleteProject, getProjects } from './src/controllers/projects.controller';
var cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;
app.use(cors())
app.use(express.json());

// Define a simple route
app.get('/projects', getProjects);
app.put('/complete-projects', completeProject);
app.post('/create-project', createProject);
app.delete('/delete-project/:id', deleteProject);
app.get('/', (req, res) => res.send("Alive!"));

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;