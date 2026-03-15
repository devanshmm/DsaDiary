import prisma from "../configs/prisma.js";

export const testPrisma = async (req, res) => {
  try {
    const result = await prisma.$queryRaw`SELECT NOW()`;
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};