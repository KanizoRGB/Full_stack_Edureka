//async function

//fetch -- axios
//Axios is like fetch(JS) in backend to get the information from a third party API

//Await

const express = require('express');
const axios = require('axios'); //fetch the data from API
const app = express();
const PORT = 3000;

//Code logic

const CAT_API_URL = 'https://api.thecatapi.com/v1/images/search';

//This api will give random cat images every time

//Fetch a random cat image
app.get('/random-cat',async(req,res)=>{

    try{
        const response = await axios.get(CAT_API_URL);

        // res.json({catImage : response.data[0].url});
        // res.write(`<img src ="${catImage}"/>`);
        const catImageUrl = response.data[0].url;

        //Send an HTML Page
        res.send(`
            <html>
                <head>
                    <title>Randomcat</title>
                </head>
                <body>
                    <h1>Here is a random cat</h1>
                    <img src = "${catImageUrl}" style="border-radius:10px"/>
                </body>
                
            </html>
            `)


    }
    catch(error){
        res.status(500).json({error: `Error Fetching Cat Image`})

        //500 - Server Error

    }

})

//https://api.thecatapi.com/v1/images/searchd


//To start the server
app.listen(PORT,()=>{
    console.log(`Server running at http://localhost:${PORT}`)
})
