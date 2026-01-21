import { Router } from "express";
import { pool } from "../database.js";
import { Article } from "../interfaces.js"; 
import { ResultSetHeader } from "mysql2";
import { validateArticle } from "../middleware/article-validation.js";
import { authenticateToken } from "../middleware/auth-validation.js";

const router = Router();

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