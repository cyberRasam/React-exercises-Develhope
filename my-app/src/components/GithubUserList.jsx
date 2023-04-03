import { useEffect, useState } from "react"
import { GithubUser } from "./GithubUser"

export const GithubUserList = () => {
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
          <GithubUser
            key={index}
            username={user}
          />
        );
      })}
        </div>
    )
}