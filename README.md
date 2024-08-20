# OMOQO Challenge

## Task

Create a simple application that illustrates your skills. The application will allow the user to perform CRUD (Create, Read, Update & Delete) operations on a ship. Each ship must have a name (string), length (in meters), width (in meters), and code (a string with a format of AAAA-1111-A1 where A is any character from the Latin alphabet and 1 is a number from 0 to 9).

The deliverable must be in a public GitHub repository. You can assume that reviewers will have Visual Studio Code and Docker installed. You must create a readme that contains all instructions required to run your application. No infrastructural requirements are permitted – your solution must run locally. We would suggest that you mock the database (memory or file is fine).

## Instructions

1. Clone the repository

Clone using the web URL.

```bash
git clone https://github.com/towerbrother/omoqo-challenge.git
```

Or, use a password-protected SSH key.

```bash
git clone git@github.com:towerbrother/omoqo-challenge.git
```

Finally, navigate into the newly cloned repository.

```bash
cd omoqo-challenge
```

2. Server Application

Open a new terminal window and navigate to the server app.

```bash
cd server
```

Restore the dependencies.

```bash
dotnet restore
```

Build the project.

```bash
dotnet build
```

Run the project.

```bash
dotnet run
```

You can access and test the API using either Swagger at [http://localhost:5161/swagger/index.html](http://localhost:5161/swagger/index.html) or any other REST API Client of choice (i.e. Postman, ThunderClient, etc.).

Note, the base URL for the API endpoints is http://localhost:5161/api/Ships.

Important, you can test the API using any REST API Client of your choice, or run the client app as well.

3. Client Application

Open a new terminal window and navigate to the client app.

```bash
cd client
```

Install dependencies.

```bash
npm install
```

Run the development server.

```bash
npm run dev
```

Access the client app at [http://localhost:3000](http://localhost:3000)

## Implementation

1. Server App

The server app is a simple dotnet webapi application that allows the user to perform CRUD (Create, Read, Update & Delete) operations on a ship.

Following the instructions provided, I implemented some basic validation using a custom action filter.

2. Client App

## Further improvements

Few ideas to improve the application could be:

- server - leverage DTOs to reduce over posting
- server - extra validation to prevent ships with the same code to be submitted
- server - more specific CORS policies
- client - better handling of client side errors leveraging error boundaries
- client - better design
- client - use more reliable IDs generation method
- ...
