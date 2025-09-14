import express from 'express';
import database from './config/database.js';
import routes from './routes/index.js';
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(express.json()); 
database();
app.use('/api',routes())
app.use((err,req,res,next)=>{
  console.log(err)
    res.status(err.code).json({
        message:err.message
    })
})
app.listen(process.env.PORT, () => {
  console.log(`Server started on port ${process.env.PORT}`);
});
