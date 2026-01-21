import express from 'express';
import cors from 'cors';
import dotenv from "dotenv"
import articleRoutes from './routes/articles.js';
import authRoutes from './routes/auth.js';
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dev platforms API",
      version: "1.0.0",
      description: "A RESTful API for managing articles and user authentication with JWT",
    },
    servers: [{ url: `http://localhost:${PORT}` }],
    tags: [
      {
        name: "Auth",
        description: "Authentication endpoints for user registration and login",
      },
      {
        name: "Articles",
        description: "Endpoints for managing articles",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use(express.json());
app.use(cors());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use("/articles", articleRoutes);
app.use("/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`API Documentation available at http://localhost:${PORT}/api-docs`);
});