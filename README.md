# Social-Network-API

## Description

This is an API for a Social Networking platform. Users are able to add friends, share their thoughts in a post and react to friends' thoughts. There are visuals to display how many friends a user has and how many reactions they have on their posts using virtuals. This application uses `MongoDB` for the database, `Express.js` for the routes and `Mongoose`. The whole application is tested using `Insomnia`.

## Walk through of Application

In order to see how the application works, review the walk-through video posted below.

* [Walk-through using Insomnia](https://drive.google.com/file/d/1z4-jleO1qqUABqG3lyz9H6yLsGVQMJnk/view)

## Features

* This is a web application that uses MongoDB which is a NoSQL database. This database allows for large amounts of data.

* When the application is initialized, the database is created in MongoDB and the models created through Mongoose are added to the database.

* The database is connect using node index and it uses `localhost:3001`

* Once connected to the application, the proper parameters are outlined in the api routes

* The application is able to GET all users, GET one user, CREATE/POST a new user, UPDATE a user and DELETE a user. 

* Once a user is created, they can add a thought to their account using a CREATE/POST route, they can UPDATE a thought, DELETE a thought, GET all thoughts and GET a single thought.

* A user is able to CREATE a friend from the pre-existing list of users. They can also DELETE a friend

* Friends are able to react to another user's thoughts through a POST route.

* Reactions are a schema that can be accessed in the thought model. 

## Questions
If you have any questions, you can email [kmcwilson4@gmail.com](mailto:kmcwilson4@gmail.com)

