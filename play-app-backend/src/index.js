import connectDB from "./db/db.js";
import dotenv from "dotenv";
import { app } from "./app.js";

dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.log("ERROR : ", error);
      throw error;
    });
    const port = process.env.PORT || 8000;
    app.listen(port, () => {
      console.log(`Server is listening on port : ${port} !`);
    });
  })
  .catch((err) => {
    console.log("DB Connection Failed !! :: Error :: ", err);
  });
