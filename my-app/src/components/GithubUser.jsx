import { useEffect, useState } from "react"


export const GithubUser = ({username}) => {
    const [userData, setUserData] = useState(null)
    
    useEffect(()=> {
        async function fetchUserData () {
            const response = await fetch(`https://api.github.com/users/${username}`)
            const data = await response.json()
            setUserData(data)
        } 
        fetchUserData()
    },[username])

    if (!userData) {
        return <p>Loading...</p>;
    }
    
    return (
        <div>
            <h1>{userData.login}</h1>
            <img src={userData.avatar_url} alt="Profile" />
        </div>
    )
}