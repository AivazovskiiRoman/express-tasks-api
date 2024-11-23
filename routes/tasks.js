const express = require("express");
const { PrismaClient } = require("@prisma/client");
const errorHandler = require("../middleware/errorHandler");

const prisma = new PrismaClient();
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const tasks = await prisma.task.findMany();
    res.json(tasks);
  } catch (error) {
    errorHandler(res, error);
  }
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.task.findUnique({
      where: { id: parseInt(id) },
    });

    if (!task) {
      return res.status(404).json({ error: "Task not found." });
    }

    res.json(task);
  } catch (error) {
    errorHandler(res, error);
  }
});

router.post("/", async (req, res) => {
  const { title, color } = req.body;
  if (!title || !color) {
    return res.status(400).json({ error: "Title and color are required." });
  }

  try {
    const newTask = await prisma.task.create({ data: { title, color } });
    res.status(201).json(newTask);
  } catch (error) {
    errorHandler(res, error);
  }
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { title, color, completed } = req.body;

  try {
    const updatedTask = await prisma.task.update({
      where: { id: parseInt(id) },
      data: { title, color, completed },
    });
    res.json(updatedTask);
  } catch (error) {
    errorHandler(res, error);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.task.delete({ where: { id: parseInt(id) } });
    res.status(204).send();
  } catch (error) {
    errorHandler(res, error);
  }
});

module.exports = router;
