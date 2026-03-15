import express from 'express';
import { testPrisma } from "../controllers/test.js";

const router = express.Router();

router.get("/test-db", testPrisma);

export default router;