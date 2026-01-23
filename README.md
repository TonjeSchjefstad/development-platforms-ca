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

3. Create a `.env` file in the root directory:
```
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your-password
DB_NAME=news
PORT=3000
JWT_SECRET=your-secret-key
```

### Database Setup
Instructions will be added.

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
Content will be added later

## Contact
### Tonje Schjefstad
Frontend Development Student
Noroff School of Technology and Digital Media

- LinkedIn: https://www.linkedin.com/in/tonjeschjefstad/
- GitHub: https://github.com/TonjeSchjefstad
- Student email: tonsch03841@stud.noroff.no
- Private email: Tonje_schjefen@hotmail.com
