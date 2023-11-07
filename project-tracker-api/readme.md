# Project Tracker Mock API
This is a mock server for running locally project-tracker-ui project. This is project is a simple nodejs backend API, with an in memory database to serve data to the UI.

## How to run?
###### Install dependencies
```npm i```

###### Run Command
```npm run start```

## Available endpoints
```
GET /projects
PUT /complete-projects
POST /create-project
DELETE /delete-project/:id
PUT /edit-project/:id
GET / 
```