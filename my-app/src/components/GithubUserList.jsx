import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser"
import { Link, Outlet } from "react-router-dom"
import { ShowGithubUSer } from "./ShowGithubUser"

export default function GithubUserList  ()  {
    const [username, setUserName] = useState([])
    const [input, setInput] = useState('')
    
     function handleInput(event) {
        setInput(event.target.value)
    }

    function handleClick() {
        setUserName([...username, input])
        setInput('')
    }

    useEffect(() => {
        console.log(`list of users ${username}`);
      }, [username]);

    return (
        <div>
            <input type="text" value={input} onChange={handleInput} />
            <button onClick={handleClick}>Send</button>
            {username.map((user, index) => {
        return (
          <Link to={user} key={index}>
            <br />
            <ShowGithubUSer username={user} />
          </Link>
          
        );
      })}
        </div>
    )
}