# Node.js Project
 
Authors:
Alek,
Morgan,
Enikö

For our Web technologies assignment we worked in a group of three and split the work. Alek implemented the MVC pattern for our project and created the initial structure that we worked within, as well as the routing. Morgan dealt with the rest of the routes and implemented the GET and POST request functionality so that users could be added and the list of users could be viewed. Enikö made the frontend display all our functionality and created the functions for editing and deleting user data.


Usage:

Running the app.js (with "node app.js" in the CLI) file will lead to our homepage where our group is displayed and there is a users button which leads to the users page. Every one is fetched and displayed (without the ID) in an ejs file and each user has an Edit and a Delete button. We hardcoded some users for easier testing in the beginning but users can be added via our New User page as well. 

With the /:id path we showcase a single user who has the id in the url.

The earlier mentioned edit button leads to /:id/edit path which makes it possible to edit users attributes (we worked with firstname and favourite color).

Finally there is the /new path where a new user will be added, it will be assigned a new ID and also displayed in the users page.

Code/logic:

For the base we used the material that was provided in the class. We followed the MVC pattern- we have models, views and a controllers folder with the appropriate files inside them. 


Frontend: 

With dynamically rendered ejs files. Used basic CSS for styling so it looks more user-friendly and clean.