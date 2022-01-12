A simple REST API using node.js express in typescript js using memory data store data.

The application has 2 users by default:
const users = [
{ id: 1, name: 'Simon' },
{ id: 2, name: 'Kai Jing' }
];

To get a list users:
GET http://localhost:3000/api/users

To get a user:
GET http://localhost:3000/api/users/:id

To add a user:
POST http://localhost:3000/api/users

To update a user:
PATCH http://localhost:3000/api/users/:id

To delete a user:
DELETE http://localhost:3000/api/users/:id

## Available Scripts

In the project directory, you can run:

### `npm install`

Download and install dependences.

### `npm build`

Build javascript from typescript

### `npm start`

Runs the app in the production mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm dev`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### tsc --watch

Compile typescript in src folder to javascript in dist folder.

### References

Create Node.js & Express.js with Typescript Project
https://scalaoncloud.blogspot.com/2021/04/create-nodejs-expressjs-with-typescript.html

simple-rest-api-using-expressjs
https://github.com/htsiah/simple-rest-api-using-expressjs
