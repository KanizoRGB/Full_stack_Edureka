import React , {useContext,useState,useEffect} from 'react';
import { ThemeContext } from './ThemeContext';
import axios from 'axios';

const App = () => {
  const{theme,toggleTheme} = useContext(ThemeContext);

  const[users,setUser] = useState([])

  //Fetch the data from the API

  useEffect(() => {
    const fetchUsers = async()=>{
      try{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUser(response.data);

      }catch(error){
        console.error("Error fetching data",error);
      }
    };

    fetchUsers();
  },[]);

  return(
    <div style={{
      background: theme === 'light' ? '#fff' : '#333',
      color: theme === 'light' ? '#000' : '#fff',
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    }}>

    <h1>{theme==="light"?"Light Mode":"Dark Mode"}</h1>

    <button onClick={toggleTheme} >
      Toggle Button
    </button>

    <h2>USER DATA</h2>
    <ul>
      {users.map((user)=>(
        <li key={user.id}>
          <h3>{user.name}</h3>
        </li>
      ))}

    </ul>

    </div>
  )
}

export default App;