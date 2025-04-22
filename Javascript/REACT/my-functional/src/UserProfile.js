import React,{Component} from "react";

class UserProfile extends Component{
    constructor(props){ //props are properties

        super(props); //super is used to call the constructor of the parent class

        //Initializing the state
        this.state={
            name:"Felix",
            email:"Felix@example.com",
            profilePicture:"data:image/jpeg;base64,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"
        };


    }

    render(){
        const {name,email,profilePicture}=this.state; //destructuring the state object

        const styles ={
            container:{
                width:"300px",
                margin:"50px",
                padding:"20px",
                border:"1px solid #ccc",    
                borderRadius:"10px",
                textAlign:"center",
                boxShadow:"0 2px 5px rgba(0,0,0,0.4)",
            },

            image:{
                width:"150px",
                height:"100px",
                borderRadius:"50%",
                marginBottom:"15px",
            },
    
        }



        return(
            <div style={styles.container}>
                <img src={profilePicture} alt="Profile" style={styles.image}/>
                <h2>{name}</h2>
                <h2>{email}</h2>

            </div>
        )
    }
    
}

export default UserProfile; //exporting the UserProfile component so that it can be used in other files