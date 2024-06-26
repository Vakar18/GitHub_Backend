# GitHub User Management Backend

This backend application provides a set of APIs for managing GitHub user data. It integrates with the GitHub API to fetch user details and stores them in a MongoDB database. Below are the features and APIs supported by this backend project:

## Features

1. **Save GitHub User Data to Database:** Accepts a GitHub username and saves the user's details from the GitHub API into the database. If the user's data is already available in the database, it does not call the GitHub API again.

2. **Find Mutual Followers:** Finds mutual followers between users and saves them as friends. For example, if UserA follows UserB, UserC, and UserD, and UserB and UserC follow back UserA, then UserB and UserC would be friends of UserA.

3. **Search User Data:** Allows searching for user data based on username and location.

4. **Soft Delete User Record:** Soft deletes a user record based on a given username from the database.

5. **Update User Fields:** Updates fields like "location", "blog", "bio", etc., for a given user in the database.

6. **List Users Sorted by Fields:** Returns a list of all users from the database sorted by specified fields like "public_repos", "public_gists", "followers", "following", "created_at", etc.

## APIs

- **Save GitHub User Data:** `GET /api/users/:username`
- **Find Mutual Followers:** `GET /api/users/mutual-followers`
- **Search User Data:** `GET /api/users/search?username={username}&location={location}`
- **Soft Delete User Record:** `DELETE /api/users/:username`
- **Update User Fields:** `PUT /api/users/:username`
- **List Users Sorted by Fields:** `GET /api/users/`

## Technologies Used

- **Node.js:** JavaScript runtime environment for running the backend server.
- **Express.js:** Web application framework for creating RESTful APIs.
- **MongoDB:** NoSQL database for storing user data.
- **Mongoose:** MongoDB object modeling tool for Node.js.
- **Axios:** Promise-based HTTP client for making requests to the GitHub API.
- **Cors:** Middleware for enabling Cross-Origin Resource Sharing.
- **Validator:** Middleware for validating request data.
- **GitHub API:** External API for fetching GitHub user data.

## Getting Started

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Configure environment variables, including MongoDB connection URI and GitHub API credentials.
4. Run the server: `npm start`

## Contributors

- Vakar Ahmad(https://github.com/Vakar18)

