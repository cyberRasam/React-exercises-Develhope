import { Outlet } from 'react-router-dom'
import {GithubUser} from './GithubUser'

 export const ShowGithubUSer =  ({username}) =>  {
 return (
    <div>
        <GithubUser username={username} />
    
    </div>
 )
}

