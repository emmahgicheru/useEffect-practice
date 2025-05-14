import UserList from "../components/UserList"
import {useState, useEffect} from "react";


function App() {
    const [users, setUsers] = useState([]);
    const [url, setUrl] = useState("https://jsonplaceholder.typicode.com/users/");

    useEffect(() => {
     fetch(url)
      .then(response => response.json())
      .then(data => {
       (Array.isArray(data) ? setUsers(data) : setUsers[data]);
      
      })

      .catch(error => console.error('Error fetching data:', error));

  }, [url]);

    function handleGetRandomUsers() {
      const randomUserId = Math.floor(Math.random() * 10) + 1;
      setUrl(`https://jsonplaceholder.typicode.com/users/${randomUserId}`);
    } 

    function handleGetAllUsers() {
      setUrl("https://jsonplaceholder.typicode.com/users/");
    } 

    return (
        <>
          <UserList users={users} onGetRandomUsers = {handleGetRandomUsers} onGetAllUsers = {handleGetAllUsers}/>
        </>
    )
}

export default App
