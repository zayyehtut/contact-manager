import express from "express";
import cors from "cors";
import contactRoutes from "./routes/contacts";

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactRoutes);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
