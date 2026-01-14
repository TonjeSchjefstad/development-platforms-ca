import { z } from "zod";
import { Request, Response, NextFunction } from "express";

const articleSchema = z.object({
  title: z
  .string()
  .min(5, "Title must be at least 5 characters long")
  .max(100, "Title must not exceed 200 characters"),
  body: z
  .string()
  .min(1, "Body is required"),
  category: z
  .string()
  .min(3, "Category must be at least 3 characters long")
  .max(50, "Category must not exceed 50 characters"),
});

export const validateArticle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const result = articleSchema.safeParse(req.body);

  if (!result.success) {
    return res.status(400).json({
      error: "Validation failed",
      details: result.error.issues.map((issue) => issue.message),
    });
  }
  
  next();
}