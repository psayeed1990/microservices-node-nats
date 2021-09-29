import express from 'express';
import { json } from 'express';

const app = express();

app.use(json())

app.get('/api/users/currentUser',(req, res)=>{
    res.json({hi: 'Success'})
})

app.listen(3000, ()=>{
    console.log('Auth started @PORT:3000')
})