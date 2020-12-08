import { useEffect, useState } from "react"
import axios from 'axios'

const App = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => setUsers(response.data));
    }, []);
    console.log(users);
    return (
      <>
        <p>App Component</p>
      </>
    );
};

export default App;