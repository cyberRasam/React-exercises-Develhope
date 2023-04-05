import { useState } from "react";

export function userPass() {
    const [username, setUsername] = useState('');
    const [pass, setPass] = useState('');

    function handleUsername(event) {
        setUsername(event.target.value)
    } 

    function handlePass(event) {
        setPass(event.target.value)
    } 


    return [username, pass, handleUsername, handlePass]
}