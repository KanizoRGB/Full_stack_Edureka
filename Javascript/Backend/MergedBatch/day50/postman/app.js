const express = require('express');

const app = express()

const PORT = 3000;

app.use(express.json()); //Express will use the data in json format - json() - data can be easily converted into human readable form


//1.GET - To get the information from server
app.get('/restaurant',(req,res)=>{
    res.send('List of all restaurants')
})


app.get('/restaurant/:id',(req,res)=>{
    res.send(`Menu of restaurant with ID:${req.params.id} `)
});

//2.POST -- MEANS TO SEND DATA TO THE SERVER

app.post('/order',(req,res)=>{
    res.send(`Order placed successfully! Order details ${JSON.stringify(req.body)}`)
});

//3.PUT
app.put('/order/:id',(req,res)=>{
    res.send(`Order with ID :${req.params.id} Update succesfully`)
})

//4.DELETE
app.delete('/order/:id',(req,res)=>{
    res.send(`Order cancelled with order ID: ${req.params.id}`)
})

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});

//https://api.thecatapi.com/v1/images/search

//PUT --means to update and send to server

//DELETE --Delete the data