This is the readme file to the Birthday Coding Challenge for FlowXO

1. How to install and run the project
Requirements: Node 8
To run the server, run the command 'node server.js'
To open the front end go to client/index.html

2. Technical choices
express for server, as it is in my opinion one of the most simplest and flexible solutions for this application


3. trade-offs you needed to make and your reasoning
Implementing this application I have decided to keep the frontend and backend separate.
The backend's (or server) purpose is to serve and handle data. I will define an endpoint (or route) called 'birthdays' which will give an implementation to 3 methods: GET, POST and DELETE. These routes are defined in the 'routes' directory. The logic is within the controller directory. The server it self is run from the main directory.
I have decided to serve the whole list on each GET, any sort of filtering or computation will be done on clientside to keep the serverload to a minimum.

For the client application, I will create a standalone app which will connect to the server endpoints

4. Future implementations
One feature that could be added in the future would be a route where the name can be specified in the API, so that 

Contact details:
Stefan L
github.com/volsonis

