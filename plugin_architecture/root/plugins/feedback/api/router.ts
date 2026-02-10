import { Router } from "express";

export const router = Router();

router.post("/submit", async (req, res) => {
  const message = String(req.body?.message ?? "").trim();
  if (message.length < 3) return res.status(400).json({ error: "Message too short" });

  // In real world: write to DB owned by this plugin
  return res.status(201).json({ ok: true, message });
});
