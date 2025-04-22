import {useState} from 'react';

function Signup(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState(''); 
    const [password, setPassword] = useState('');

    return(
        <div style={{maxWidth:"400px",margin:"0 auto",padding:"20px"}}>
            <h2>SignUp Page </h2>

            <form >
                <div>
                    <label >Name:</label>
                    <input 
                    type="text"
                    value={name}
                    placeholder='Enter your name'
                    />
                </div>

                <div>
                    <label >Email:</label>
                    <input 
                    type="email"
                    value={email}
                    placeholder='Enter your email'
                    />
                </div>
                <div>
                    <label >Password:</label>
                    <input 
                    type="password"
                    value={email}
                    placeholder='Enter your password'
                    />
                </div>

                <button type='submit'>SignUp page</button>
            </form>
        </div>
    )
};

export default Signup;