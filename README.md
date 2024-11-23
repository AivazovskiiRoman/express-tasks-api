# Back-End: Express.js API

This repository contains a Back-End API built using Express.js and Prisma for database operations.

**Repository Structure:**
```bash
express-tasks-api/
│
├── db/                        # Database-related files
│   └── prismaClient.js        # Prisma client initialization
│
├── middleware/                # Middleware files
│   └── errorHandler.js        # Error handling middleware
│
├── routes/                    # API routes
│   └── tasks.js               # Task-related routes
│
├── .env                       # Environment variables
├── package.json               # Project dependencies and scripts
├── prisma/                    # Prisma schema and migrations
│   └── schema.prisma          # Prisma schema file
├── server.js                  # Main entry point for the Express app
└── README.md
```
**Setup Instructions:**

1. Clone the repository: `git clone https://github.com/AivazovskiiRoman/express-tasks-api.git`
   - Navigate into the project directory: `cd express-tasks-api`
2. Install dependencies: `npm install`
3. Create a new file named `.env` in the root directory and add the following variables:
   - `DATABASE_URL`: Your database connection URL
   - Example: `DATABASE_URL="mysql://USER:PASSWORD@localhost:3306/todolist_db"`
4. Initialize the Database with Prisma
   - Install Prisma CLI (if not already installed): `npm install prisma --save-dev`
   - Initialize the database using Prisma: `npx prisma migrate dev --name init`
5. Start the API: `npm start`

This will start the Express server on http://localhost:4000 (or whichever port you have configured in your .env.local file for example).

**Database Initialization using Prisma:**

1. Ensure you have Prisma installed globally: `npm install -g prisma`
2. Create a new Prisma schema file: `npx prisma init`
3. Define your database schema in `schema.prisma`
4. Apply the schema changes to your database: `npx prisma migrate dev`
5. Generate Prisma client: `npx prisma generate`

**API Endpoints:**

* GET `/tasks`: Fetches all tasks.
* GET `/tasks/:id`: Fetches a specific task by ID.
* POST `/tasks`: Creates a new task.
* PUT `/tasks/:id`: Updates an existing task by ID.
* DELETE `/tasks/:id`: Deletes a task by ID.

**Contributing:**

Contributions are welcome! Please open a pull request with your changes.