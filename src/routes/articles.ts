import { Router } from "express";
import { pool } from "../database.js";
import { Article } from "../interfaces.js";
import { ResultSetHeader } from "mysql2";
import { validateArticle } from "../middleware/article-validation.js";
import { authenticateToken } from "../middleware/auth-validation.js";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Article:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: The article ID
 *         title:
 *           type: string
 *           description: The article title
 *         body:
 *           type: string
 *           description: The article content
 *         category:
 *           type: string
 *           description: The article category
 *         submitted_by:
 *           type: integer
 *           description: The user ID who submitted the article
 *         created_at:
 *           type: string
 *           format: date-time
 *           description: The article creation timestamp
 *       example:
 *         id: 1
 *         title: "Introduction to Node.js"
 *         body: "Node.js is a JavaScript runtime built on Chrome's V8 engine..."
 *         category: "Technology"
 *         submitted_by: 1
 *         created_at: "2024-01-21T10:30:00.000Z"
 *     ArticleInput:
 *       type: object
 *       required:
 *         - title
 *         - body
 *         - category
 *       properties:
 *         title:
 *           type: string
 *           description: The article title
 *         body:
 *           type: string
 *           description: The article content
 *         category:
 *           type: string
 *           description: The article category
 *       example:
 *         title: "Introduction to Node.js"
 *         body: "Node.js is a JavaScript runtime built on Chrome's V8 engine..."
 *         category: "Technology"
 *     Error:
 *       type: object
 *       properties:
 *         error:
 *           type: string
 *           description: Error message
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT
 */

/**
 * @swagger
 * /articles:
 *   get:
 *     summary: Get all articles
 *     description: Retrieve a list of all articles ordered by creation date (newest first)
 *     tags: [Articles]
 *     responses:
 *       200:
 *         description: A list of articles
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Article'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.get("/", async (req, res) => {
  try {

    const [rows] = await pool.execute(`
      SELECT 
        id,
        title,
        body,
        category,
        created_at
      FROM articles
      ORDER BY created_at DESC
    `);
    
    const articles = rows as Article[]; 
    
    res.json(articles);

  } catch (error) {
    console.error("Error fetching articles:", error);
    res.status(500).json({ error: "Failed to fetch articles" });
  }
});

/**
 * @swagger
 * /articles:
 *   post:
 *     summary: Create a new article
 *     description: Create a new article (requires authentication)
 *     tags: [Articles]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/ArticleInput'
 *     responses:
 *       201:
 *         description: Article created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                 article:
 *                   $ref: '#/components/schemas/Article'
 *       400:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       401:
 *         description: Unauthorized - missing or invalid token
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 *       500:
 *         description: Server error
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Error'
 */
router.post("/", authenticateToken, validateArticle, async (req, res) => {
  try {
    const { title, body, category } = req.body;

    const submitted_by = req.user!.id;

    const [result]: [ResultSetHeader, any] = await pool.execute(
      "INSERT INTO articles (title, body, category, submitted_by) VALUES (?, ?, ?, ?)",
      [title, body, category, submitted_by]
    );

    const article: Article = {
      id: result.insertId,
      title,
      body,
      category,
      submitted_by,
      created_at: new Date(),
    };

    res.status(201).json({
      message: "Article created successfully",
      article,
    });

  } catch (error) {
    console.error("Error creating article:", error);
    res.status(500).json({ error: "Failed to create article" });
  }
});

export default router;