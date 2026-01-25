# Development Platforms Course Assignment

## Description
For this CA I have built a REST API for a News Platform. It is built with Express.js, TypeScript and MySQL, and provides user authentication and data management. Users can register, login and create news articles, and browse articles. 

## Getting Started

### Prerequisites
- Node.js (v20+)
- npm
- MySQL
- MySQL Workbench

### Installing

1. Clone the repository:

```bash
git clone https://github.com/TonjeSchjefstad/development-platforms-ca.git
```

2. Install dependencies:

```
npm install
```

3. Setup database:
Open MySQL Workbench and import database using:
- Server → Data Import → Import from Self-Contained File
- Select `database.sql` file from the project
- Under "Default Target Schema", click "New..." and enter `news` as the database name
- Start Import
- 7. Verify the import by running:
```sql
   USE news;
   SHOW TABLES;
```
Right-click in the Schemas panel and select "Refresh All" to verify the import.

4. Create a `.env` file in the root directory:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=news
PORT=3000
JWT_SECRET=your-secret-key
```

### Running

Start the development server with:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

## Available Scripts
- `npm run dev` – Start development server
- `npm run build` – Compile TypeScript to JavaScript
- `npm start` – Run production build

## API Documentation

After starting the server, visit:
- API Docs: http://localhost:3000/api-docs

## API Endpoints
- `GET /articles` - Get all articles
- `POST /auth/register` - Register new user
- `POST /auth/login` - Login and receive JWT token
- `POST /articles` - Create new article

## Tech Stack
- Express.js 
- TypeScript 
- MySQL 
- mysql2
- bcrypt 
- jsonwebtoken 
- Zod 
- CORS
- dotenv 
- tsx 
- Swagger/OpenAPI 

## Project Structure
```bash
development-platforms-ca/
├── src/
│   ├── routes/
│   │   ├── articles.ts
│   │   └── auth.ts
│   ├── middleware/
│   │   ├── article-validation.ts
│   │   └── auth-validation.ts
│   ├── utils/
│   │   └── jwt.ts
│   ├── types/
│   │   └── express.d.ts
│   ├── database.ts
│   ├── interfaces.ts
│   └── index.ts
├── .env
├── .gitignore
├── database.sql
├── package.json
├── tsconfig.json
└── README.md
```

## Folder Highlights
- ```src/routes/``` → API endpoints
- ```src/middleware/``` → Validation and authentication middleware
- ```src/utils/``` → Helper functions
- ```src/types/``` → TypeScript type definitions
- ```database.sql``` → MySQL database 

## AI use in this project
I have used AI for two purposes in this project:
- Add Swagger documentation
- Create test articles

## Motivation
I chose to do option 1 Express.js API because I wanted to get a better understanding about backend development and how APIs work. I have been thinking about studying backend after finishing my frontend studies, so i really enjoyed getting more insight into the server-side. After completing the modules I can see that Supabase would be a fast solution if I'm building a project quickly, due to having features like auto-generated APIs, authencication system, row level security and  real-time subscriptions. For learning purposes I wanted to build everything from scratch to better understand the concepts and have full controll over the API.

Doing this CA helped me gain experience in creating a custom API, and I've been following the steps in the modules to ensure that the CA requirements are met. I enjoyed getting familiar with MySQL Workbench and to learn how databases work on a fundamental level. I also enjoyed getting more experience with Postman for API testing.

From this course I have learned how databases store and relate data through foreign keys, how middleware functions protect routes and validate input, and how interfaces ensure type safety. Implementing security features like JWT authentication and bcrypt password hashing was valuable, and I have a better understanding how to protect user data. 

During this project I did bumb into minor hickups along the way, but I prioritized testing my endpoints thoroughly, and managed to fix issues right away. Before starting on the assignment, I went through all modules and wrote down all steps, and planned the project structure, so it would be easier to know where each code should go, and when to implement the different parts. I struggled with finding out the correct way to import a database when setting up a project locally. The modules didn't cover that part, so I had to research the solution. All in all I really enjoyed this project. 



## Contact
### Tonje Schjefstad
Frontend Development Student
Noroff School of Technology and Digital Media

- LinkedIn: https://www.linkedin.com/in/tonjeschjefstad/
- GitHub: https://github.com/TonjeSchjefstad
- Student email: tonsch03841@stud.noroff.no
- Private email: Tonje_schjefen@hotmail.com
