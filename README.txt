#Birthdays app challenge
This is the readme file to the Birthday Coding Challenge for FlowXO

##1. How to install and run the project
Requirements: Node 8
To install the server go to the base directory and run 'npm install'
To run the server, run the command 'node server.js'

To install all client dependencies go to client/bday-client and run 'npm install'
To open the front end go to client/bday-client and run 'npm start'


##2. Technical choices
express for server, as it is in my opinion one of the most simplest and flexible solutions for this application

I used react for the frontend, because it is a good excuse to give it a try, and it easily covers all functionality.

In hindsight it probably would have been better to use the moment library for the date calculations.


##3. trade-offs you needed to make and your reasoning
Implementing this application the frontend and backend will be separate applications.
The backend's (or server) purpose is to serve and handle data. I will define an endpoint (or route) called 'birthdays' which will give an implementation to 3 methods: GET, POST and DELETE. GET will retrieve the full JSON of all birthdays, POST will be used to add 1 new entry at a time. These endpoints are defined in the 'routes' directory, where they are also linked to the logic. The logic is within the controller directory. The server it self is run from the main directory, by executing 'server.js' using node.
I have decided to serve the whole list on each GET, any sort of filtering or computation will be done on clientside to keep the serverload to a minimum.

For the client application, I will create a standalone app which will connect to the server endpoints.

###3 Main Features
####first function
A single UI page that shows you today's birthdays, upcoming birthdays (next 2 weeks), and a list view of all the people whose birthdays you're keeping track of.
For today's birthdays and upcoming, show how old that person is (or will be), taking today's date into account as well as accounting for an upcoming new year and correct the calculation.
The list will show the person's name and date of birth.
I have decided to keep the CSS plain.

####second function
The ability to add a new birthday to the list, requiring the person's name and date of birth (add some validation).
currently only via an API tool such as postman. (import BirthdayChallenge.postman_collection.json to your postman)

####third function
You should be able to delete birthdays too. I have decided to keep this a simple text box and submit button.
currently only via an API tool such as postman. (import BirthdayChallenge.postman_collection.json to your postman)

###Testing
The backend using mocha/chai to test the capability as a whole. 
More fine grain tests for the controller can also be addded.
The frontend using Jest.

Tests can be executed by running 'npm test' in the respecitve directories.


##4. Future implementations
One feature that could be added in the future would be a route where the name can be specified in the API, so that a single person's birthday can be retrieved.

