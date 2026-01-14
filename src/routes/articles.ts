import { Router } from "express";
import { pool } from "../database.js";
import { Article } from "../interfaces.js"; 

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

export default router;