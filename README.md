# Fluencia Internship Bootcamp

We are excited to have you participate in Fluencia's Summer internship program.
Our goal for all interns is to make them feel like any other engineer on the
team and we expect our interns to make valuable contributions to to their
project during the Summer internship.

This sample application will help familiarize you with many of the technologies
used in our projects. By completing the tasks outlined below, you will be well
prepared to start working on our production applications during the Summer.

## Installation

In order to be able to run the application you will need to have the following
software installed.

**Required**
* NodeJS (0.10.*) [Install Guide](https://nodejs.org/download/)
* MongoDB [Install Guide](http://docs.mongodb.org/manual/installation/)
* Git  [Install Guide](http://docs.mongodb.org/manual/installation/)

**Optional**
* Text Editor (We use Sublime Text 2) [Install Guide](http://www.sublimetext.com/2)

Once all of the required software has been installed, complete the following
steps to get the application up and running:

1. Clone this repo to your machine
2. In a seperate terminal window run `mongod`. This will start the MongoDB database.
3. In the `intern-app/db` folder run `import.sh` to load some dummy data into MongoDB.
4. In the `intern-app` directory run `npm install` to install project dependencies
5. In the `intern-app` directory run `npm start` to start the application
6. In your browser, go to `localhost:3000`


## Technologies Being Used

There are a number of different technologies being used in the application. A large
part of this project will be learning what the different technologies are used for
and how you can get help for each one of them. Here is a quick rundown of the primary
technologies being used:

* MongoDB     - This is the database for the application
* javascript  - All of the programming logic is written in javascript.
* NodeJS      - Is the runtime environment for our javascript, similar to the JVM, this allows us to run javascript outside of the browser.
* Mongoose - This is our Object Document Mapper (ODM). This library allows us to interact with MongoDB from NodeJS
* Express - This is the web application framework we use to build the web app. It follows a pattern called MVC which stand for Model, View, Controller. It may be helpful to do a quick read on what MVC is.
* Jade - These are the views in our MVC framework. You will notice all of the files in the view folder end with ".jade". These are the templates that express uses to dynamically generate html files.

## TODOs

The project is pretty bare bones right now. Here are some tasks we would like you to complete.

1. Currently the links for the blog return an error. We would like you to create a new route to respond to these links with the correct blog post for the id specified in the url.
2. In addition to the Post model you used in the last task, there is also a Comment model. Update your new route to also display all of the comments associated with a blog entry.
4. On the same page you are working on we want to add a "Up Vote" feature to a blog post. Each post page should show the number of votes and allow a user to up vote a post. This feature should use ajax to send a
request in the background and then update the vote count on the page. You may want to research jquery.post or jquery.ajax.
3. On the same page you have been working on create a form to add new comments. The form should use ajax to send the new comment to the server then update the page on success.



