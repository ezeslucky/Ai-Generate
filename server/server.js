import express from 'express'
import cors from    'cors'
import 'dotenv/config'
import conncetDB from './config/mongodb.js'


const PORT = process.env.PORT || 8000
const app = express()



app.use(express.json())
app.use(cors())
await conncetDB()

app.get('/', (req,res)=> res.send("API Working"))



app.listen(PORT, ()=> console.log("Server is Running " + PORT))