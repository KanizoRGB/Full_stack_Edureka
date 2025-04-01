const  express = require('express');
const cors = require('cors');

const app = express();

const PORT = 3300;

app.use(cors()); //Permission given to share the resource from differerent origin or address

app.use(express.json());

app.post('/login',(req,res)=>{

    const {name,email} = req.body

    //simple validation
    if(name && email){
        res.json({message:`Welcome on board ${name}`});
    }else{
        res.status(400).json({message:`Name and Email are required`});
    }
})

app.listen(PORT,()=>{
    console.log(`Server running at https://localhost:${PORT}`)
})