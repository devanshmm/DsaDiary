import dotenv from "dotenv";
dotenv.config();
import express from "express";
import testRoutes from "./src/routes/test.js";

const app = express();
//console.log(process.env.DATABASE_URL);

app.use(express.json());

app.get('/', (req, res) => {
    res.send('this is test');
});

app.use('/api', testRoutes);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
