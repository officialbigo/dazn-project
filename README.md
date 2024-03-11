Setting Up and Running the Node.js REST API:

  Clone the GitHub Repository:
      Open a terminal or command prompt.
      Run the following command to clone the repository:

    git clone https://github.com/officialbigo/dazn-project


Navigate to the Project Directory:

  Use the cd command to navigate into the project directory:

    cd your-repository

Install Dependencies:

  Run the following command to install the project dependencies (assuming there's a package.json file):

    npm install

Start the Server:
 
   Run the following command to start the Node.js server:

    node server.js

The server should now be running, and you should see output indicating the server is listening on a specific port ( http://localhost:5001).

How to have access to admin permissions:

  In the end-point "GET /admin/login" send a json body consisting of { "admin_name":"admin" , "password":"admin"}

  Thus a jwt access token will be provided should be used in the auth header bearer token section for access to admin operations.

How to create a new admin user:

  In the "POST /admin/register" send a json body consisting of  { "admin_name":"name" , "password":"pswd"}.

  Thus a new admin user will be created with the admin_name and password for admin access permissions.

Movie lobby end pts:

  - `GET /movies`: List all the movies in the lobby
  - `GET /search?q={query}`: Search for a movie by title or genre
  - `POST /movies`: Add a new movie to the lobby (requires admin auth token)
  - `PUT /movies/:id`: Update an existing movie's information (title, genre, rating, or streaming link) (requires admin auth token)
  - `DELETE /movies/:id`: Delete a movie from the lobby (requires admin auth token)

Technologies used:

  -bcrypt
  -jsonwebtoken
  -mongodb

Developed by-

  TRK Aashish

