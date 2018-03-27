This is the readme file to the Birthday Coding Challenge for FlowXO

1. How to install and run the project
Requirements: Node 8
To run the server, run the command 'node server.js'
To open the front end go to client/index.html

2. Technical choices
express for server, as it is in my opinion one of the most simplest and flexible solutions for this application


3. trade-offs you needed to make and your reasoning
Implementing this application the frontend and backend will be separate applications.
The backend's (or server) purpose is to serve and handle data. I will define an endpoint (or route) called 'birthdays' which will give an implementation to 3 methods: GET, POST and DELETE. GET will retrieve the full JSON of all birthdays, POST will be used to add 1 new entry at a time. These endpoints are defined in the 'routes' directory, where they are also linked to the logic. The logic is within the controller directory. The server it self is run from the main directory, by executing 'server.js' using node.
I have decided to serve the whole list on each GET, any sort of filtering or computation will be done on clientside to keep the serverload to a minimum.

For the client application, I will create a standalone app which will connect to the server endpoints.
3 Functions
first function
A single UI page that shows you today's birthdays, upcoming birthdays (next 2 weeks), and a list view of all the people whose birthdays you're keeping track of.
For today's birthdays and upcoming, show how old that person is (or will be).
The list should show the person's name and date of birth.

second function
The ability to add a new birthday to the list, requiring the person's name and date of birth (add some validation).

third function
You should be able to delete birthdays too.

4. Future implementations
One feature that could be added in the future would be a route where the name can be specified in the API, so that 

Contact details:
Stefan L
github.com/volsonis

