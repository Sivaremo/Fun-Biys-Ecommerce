const express= require('express')
const cors=require('cors')
const dotenv=require('dotenv')

const app=express()

dotenv.config()

app.use(express.json());
app.use(cors())